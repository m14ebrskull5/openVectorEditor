var express = require('express')
const { execSync } = require('child_process');
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')
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
    let out = './out/' + uuidv4()
    try {
        const output = execSync('.\\mus.exe -align ' + file + ' -output ' + out);
        console.log('命令执行结果:', output.toString());
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
    console.log(req.body)
    var file = "./seq/" + uuidv4() + '.fasta';
    saveSeq(req.body.sequencesToAlign, file)
    var output = runMuscle(file)
    var alignResult = fs.readFileSync(output)
    var alignParsedResult = parseAlignment(alignResult.toString())
    console.log(alignResult.toString())
    res.send({
        "id": "msaAlignment_1",
        "alignmentType": "Multiple Sequence Alignment 11111",
        alignmentTracks: alignParsedResult.map((i,index) => {
            return {
                sequenceData: {
                    "name": req.body.sequencesToAlign[index].name,
                    "sequence": req.body.sequencesToAlign[index].sequence
                },
                alignmentData: {
                    "name": i[0],
                    "sequence": i[1]
                }
            }
        })
    })
})

app.listen(8080)