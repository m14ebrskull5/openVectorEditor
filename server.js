/* eslint-disable eqeqeq */
/* eslint-disable no-console */
const express = require('express')
const { execSync } = require('child_process');
const os = require('os')
const ostype = os.type()
console.log("ostype", ostype)
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
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
        if (ostype === 'Windows_NT') {
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
    const s = content.split(">").filter(i => i).map(i => i.split('\n').filter(i => i))
    return s
}
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());
app.use(bodyParser.json())
// respond with "hello world" when a GET request is made to the homepage
app.post('/', function (req, res) {
    const file = "./seq/" + uuidv4() + '.fasta';
    saveSeq(req.body.sequencesToAlign, file)
    const output = runMuscle(file)
    // console.log(output)
    const alignResult = fs.readFileSync(output)
    const alignParsedResult = parseAlignment(alignResult.toString())
    // console.log(alignResult.toString())
    res.send({
        alignmentType: "Multiple Sequence Alignment",
        alignmentTracks: req.body.sequencesToAlign.map((i) => {
            const name = i.name
            const sequence = i.sequence
            const findItemIndex = alignParsedResult.findIndex(item => item[0] == name)
            const findItem = alignParsedResult[findItemIndex]
            return {
                sequenceData: {
                    ...i,
                    name: findItem[0],
                    sequence,
                    
                },
                chromatogramData: i.chromatogramData?
                    i.chromatogramData:undefined,
                alignmentData: {
                    name,
                    sequence: findItem.slice(1, i.length).join("")
                }
            }
        })
    })
})

app.listen(8080)