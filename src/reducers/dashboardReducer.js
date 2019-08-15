const INITIAL_STATE = {
    currentCity : null,
    latitudue: null,
    longitude : null
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "FETCH_CURRENT_CITY":
        return { ...state, ...action.payload}
        default:
        return state
    }
}

export default dashboardReducer