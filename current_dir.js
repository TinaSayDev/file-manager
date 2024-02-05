import os from "node:os"

const current_dir = () => {
    return `You are currently in ${os.homedir()}`
}

export default current_dir;