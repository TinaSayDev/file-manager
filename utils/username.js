const username = () => {
    let username = process.argv[2]
    if (username) {
        if (username.startsWith('--', 0)) {
            let dataArray = username.split('=')
            dataArray.shift()

            if (dataArray.length < 1) {
                return setDefaultUsername()
            } else {
                return dataArray.join('')
            }

        }
    } else {
        return setDefaultUsername()
    }

}


// Default username if no arguments set
const setDefaultUsername = () => {
    return "User"
}


export default username()