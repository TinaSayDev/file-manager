import {rename as newname} from 'node:fs';
import os from "node:os"

const dir = os.homedir();

const rename = async (input) => {
    const arr = input.trim().split(' ');
    if (arr.length <= 1) {
        console.log("Please enter filename")

    } else {
        arr.shift();
        const oldFileName = arr[0]
        const newFileName = arr[1]
        await newname(`${dir}/${oldFileName}`, `${dir}/${newFileName}`, (err) => {
            err ? console.error(err.message) : console.log('File renamed!')
        });
    }


};

export default await rename;