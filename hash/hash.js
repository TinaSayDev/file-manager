import crypto from "crypto"
import {createReadStream} from "node:fs"

const hash = async () =>{
    console.log(process.npm_config)
    /*const filename=process.argv[2]
    const hash = crypto.createHash('sha256');
    const input = createReadStream(filename);
    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(`${hash.digest('hex')} ${filename}`);
        }
    });*/
}

await hash()