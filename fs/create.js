import * as fs from 'node:fs/promises'
import os from 'node:os'
import path from "node:path"

const create = async (input) => {
    const arr = input.trim().split(' ');
    if (arr.length <= 1) {
        console.log("Please enter filename")

    } else {
        arr.shift();
        let filename = arr.join(' ')

        let filepath = `${os.homedir()}/${filename}`
        if (path.extname(filepath) === '') {
            filepath += '.txt'
        }
        try {
            await fs.writeFile(filepath, '', {flag: 'ax+'});
        } catch (e) {
            throw new Error('FS operation failed')

        }
    }

}

export default await create