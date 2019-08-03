const LOG_IN = "LOG_IN"

const userLogin = (user) => {
console.log(user, "action called")
    return {
        type: LOG_IN,
        user
    }
}

export default userLogin 