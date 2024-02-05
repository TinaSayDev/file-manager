import readline from "node:readline"
import {stdin as input, stdout as output} from 'node:process'
import path from "node:path"
import os from "node:os"
import username from "./utils/username.js"
import create from "./fs/create.js";
import list from "./nwd/list.js";
import read from "./fs/read.js";
import rn from "./fs/rn.js";
import copy from "./fs/copy.js";
import move from "./fs/move.js";
import remove from "./fs/remove.js";

const prompter = (dir, rl) => {
    let msg = `You are currently in ${dir} \n> `
    rl.setPrompt(msg)
    rl.prompt();
}

// Message and command emitted on .exit command or CTRL+C
const closeMsg = (user) => {
    console.log(`Thank you for using File Manager, ${user}, goodbye!`);
    process.exit(0);
}

const start = async () => {
    const rl = readline.createInterface({input, output});
    let homedir = os.homedir()

    console.log(`Welcome to the File Manager, ${username}!`)
    prompter(homedir, rl)
    let answer;
    rl.on('line', (input) => {
        if (input.trim() === '.exit') {
            closeMsg(username)
        }
        if (input.trim() === 'up') {
            homedir = path.join(homedir, '../')
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('cd', 0)) { //TODO: validate destination
            const arr = input.trim().split(' ');
            if (arr.length <= 1) {
                console.log("Please enter dir")
                return
            } else {
                arr.shift();
                homedir = arr.join(' ')
                prompter(homedir, rl)
            }
            rl.prompt();
        }

        if (input.trim() === 'ls') {
            list();
            prompter(homedir,rl)
            rl.prompt();
        }
        if (input.trim().startsWith('add', 0)) {
            create(input);
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('cat', 0)) {
            read(input)
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('rn', 0)) {
            rn(input)
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('cp', 0)) {
            copy(input)
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('mv', 0)) {
            move(input)
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('rm', 0)) {
            remove(input)
            prompter(homedir, rl)
            rl.prompt();
        }
        if (input.trim().startsWith('os',0)){

            if (input.includes('--EOL')){
                console.log(JSON.stringify(os.EOL))
            }
            if (input.includes("--cpus")) {
                const numberOfCpus = os.cpus().length

                const modelAndSpeed = os.cpus().map(cpu => {
                    return {
                        model: cpu.model,
                        speed: `${(cpu.speed / 1000).toFixed(2)}Ghz`
                    }
                })
                 answer = {
                    TotalCPUs: numberOfCpus,
                    modelAndSpeed
                }
            }
           if (input.includes('--homedir')) {
                answer = os.homedir();
            }
            if (input.includes("--username")) {
                answer = os.userInfo().username
            }
            if (input.includes("--architecture")) {
                answer = os.arch()
            }
            console.log(answer);
            rl.prompt();
        }


    }).on('close', () => {
        closeMsg(username)

    });

}

await start();