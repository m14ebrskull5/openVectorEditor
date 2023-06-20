let express = require('express')
const { execSync } = require('child_process');
const os = require('os')
const ostype = os.type()
console.log("ostype", ostype)
let app = express()
let fs = require('fs')
let bodyParser = require('body-parser')
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const { func } = require('prop-types');
function saveSeq(sequencesToAlign, file) {
    sequencesToAlign.forEach((item) => {
        console.log(item)
        fs.writeFileSync(file, ">" + item.name + "\n", {
            flag: 'a'
        })
        fs.writeFileSync(file, item.sequence + "\n", {
            flag: 'a'
        })
    })
}
function runMuscle(file) {
    const out = './out/' + uuidv4()
    try {
        if(ostype === 'Windows_NT') {
            const output = execSync('.\\mus.exe -align ' + file + ' -output ' + out);
            console.log('命令执行结果:', output.toString());
        } else {
            const output = execSync('./mus_linux -align ' + file + ' -output ' + out);
            console.log('命令执行结果:', output.toString());
        }
        
    } catch (err) {
        console.error('执行命令时发生错误:', err);
        return null
    }
    return out
}
function parseAlignment(content) {
    let s = content.split(">").filter(i => i).map(i => i.split('\n').filter(i => i))
    return s
}
app.use(cors());
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.post('/', function (req, res) {
    let file = "./seq/" + uuidv4() + '.fasta';
    saveSeq(req.body.sequencesToAlign, file)
    let output = runMuscle(file)
    // console.log(output)
    let alignResult = fs.readFileSync(output)
    let alignParsedResult = parseAlignment(alignResult.toString())
    // console.log(alignResult.toString())
    res.send({
        "id": "msaAlignment_1",
        "alignmentType": "Multiple Sequence Alignment 11111",
        alignmentTracks: alignParsedResult.map((i,index) => {
            const name = i[0]
            const sequence = i.slice(1, i.length -1).join("")
            let findItemIndex = req.body.sequencesToAlign.findIndex(item => item.name == name)
            let findItem = req.body.sequencesToAlign[findItemIndex]
            console.log(findItemIndex, findItem)
            return {
                sequenceData: {
                    "name": findItem.name,
                    "sequence": findItem.sequence
                },
                alignmentData: {
                    name,
                    sequence
                }
            }
        })
    })
})

app.listen(8080)