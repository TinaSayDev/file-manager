import fs from "node:fs"
import os from 'node:os'

const read = async (input) => {

    let filename = input.trim().split(' ');
    if (filename.length <= 1) {
        console.log("Please enter filename")
    } else {
        filename.shift();
         filename = filename.join(' ')

        const readStream = fs.createReadStream(`${os.homedir()}/${filename}`)

        readStream.on('error', err => console.error(err.message))
        readStream.on('data', chunk => {
            process.stdout.write(chunk)
        })
    }
}

export default await read;