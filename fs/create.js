import * as fs from 'node:fs/promises'

const dir = import.meta.dirname

const create = async () => {
    const filename = process.argv[2]
    const filepath = `${dir}/${filename}`
    try {
        await fs.writeFile(filepath, '', {flag: 'ax+'});
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await create();