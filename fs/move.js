import fs, {unlink} from 'node:fs'

const dir = import.meta.dirname;

const move = async () => {
    const fileName = process.argv[2]
    const dirToCopy = process.argv[3]

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
};

await move();
