import current_dir from "./current_dir.js";
const start = () => {
    console.log(`Welcome to the File Manager, ${process.env.npm_config_username}!`)
    current_dir();
}

start();