import {unlink} from 'node:fs';
import os from "node:os"

const dir = os.homedir()


const remove = async (input) => {
    const arr = input.trim().split(' ');
    if (arr.length <= 1) {
        console.log("Please enter filename")

    } else {
        arr.shift();
        const fileName = arr[0]

        unlink(`${dir}/files/${fileName}`, err => {
            if (err) throw err.message
            console.log("File deleted")
        });
    }
};

export default await remove