import fs from "node:fs"

const dir = import.meta.dirname

const read = async () => {

    const filename = process.argv[2]
    const readStream = fs.createReadStream(`${dir}/files/${filename}`)

    readStream.on('error', err => console.error(err.message))
    readStream.on('data', chunk => {
        process.stdout.write(chunk)
    })
}

await read();