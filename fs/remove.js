import {unlink} from 'node:fs';

const dir = import.meta.dirname;

const remove = async () => {

    const fileName = process.argv[2]

    unlink(`${dir}/files/${fileName}`, err => {
        if (err) throw err.message
        console.log("File deleted")
    });

};

await remove();