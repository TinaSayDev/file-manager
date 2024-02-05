import path from "node:path"
import os from "node:os"
import {readdir} from 'node:fs/promises';

const list = async () => {
    try {
        const files = await readdir(os.homedir());
        let type;
        const dirs = []
        const filesWithExt = []
        files.map(file => {
            if (path.extname(file) === '') {
                type = "directory"
                const dir = {
                    name: file,
                    type: type
                }
                dirs.push(dir)
            } else {
                type = "file"
                const myfile = {
                    name: file,
                    type: type
                }
                filesWithExt.push(myfile)
            }
        })
        const fileObj = dirs.concat(filesWithExt)
        console.table(fileObj)

    } catch (err) {
        throw new Error('FS operation failed')
    }

}

export default await list