import os from "node:os"

const eol = async () => {
    const param = process.argv[2]
    let answer;

    if (param === "EOL") {
        answer = JSON.stringify(os.EOL)
    }
    if (param === "cpus") {
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
    } else {
        throw new Error('No option found')
    }
    console.log(answer);
}

await eol();