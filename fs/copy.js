import fs from 'node:fs'

const dir = import.meta.dirname;

const copy = async () => {
    const fileName = process.argv[2]
    const dirToCopy = process.argv[3]

    const readStream = fs.createReadStream(`${dir}/${fileName}`)
    const writeStream = fs.createWriteStream(`${dir}/${dirToCopy}/${fileName}`)

    readStream.on('error', err => console.error(err.message))
    writeStream.on('error', err => console.error(err.message))
    readStream.pipe(writeStream)
};

await copy();
