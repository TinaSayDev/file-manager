import current_dir from "./current_dir.js";
import readline from "node:readline"
import {stdin as input, stdout as output} from 'node:process'
import repl from "node:repl"

const start = async () => {
    let username = process.argv[2]
    if (username) {
        if (username.startsWith('--', 0)) {
            let dataArray = username.split('=')
            dataArray.shift()

            if (dataArray.length < 1) {
                username = setDefaultUsername()
            } else {
                username = dataArray.join('')
            }

        }
    } else {
        username = setDefaultUsername()
    }

    console.log(`Welcome to the File Manager, ${username}!`)

    const replServer = repl.start({prompt: '> '});

    replServer.on('exit', () => {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        process.exit();
    });

}

const setDefaultUsername = () => {
    return "User"
}

await start();