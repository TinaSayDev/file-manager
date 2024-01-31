import {rename as newname} from 'node:fs';

const dir = import.meta.dirname;

const rename = async () => {

    const oldFileName = process.argv[2]
    const newFileName = process.argv[3]

    await newname(`${dir}/files/${oldFileName}`, `${dir}/files/${newFileName}`, (err) => {
        err ? console.error(err.message) : console.log('File renamed!')
    });
};

await rename();