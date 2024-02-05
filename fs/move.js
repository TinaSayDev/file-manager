import fs, {unlink} from 'node:fs'

import os from "node:os"

const dir = os.homedir()

const move = async (input) => {
    const arr = input.trim().split(' ');
    if (arr.length <= 1) {
        console.log("Please enter filename")

    } else {
        arr.shift();
        const fileName = arr[0]
        const dirToCopy = arr[1]

        const readStream = fs.createReadStream(`${dir}/${fileName}`)
        const writeStream = fs.createWriteStream(`${dir}/${dirToCopy}/${fileName}`)

        readStream.on('error', err => console.error(err.message))
        writeStream.on('error', err => console.error(err.message))

        readStream.on('close', function () {
            unlink(`${dir}/${fileName}`, err => {
                if (err) throw err.message
                console.log("File moved")
            });
        });

        readStream.pipe(writeStream)
    }
};

export default await move
