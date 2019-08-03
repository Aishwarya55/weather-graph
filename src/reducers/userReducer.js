const INITIAL_STATE = {
        id : 0,
        name: null,
        role: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "LOG_IN":
        return { ...state, ...action.user}
        default:
        return state
    }
}

export default userReducer