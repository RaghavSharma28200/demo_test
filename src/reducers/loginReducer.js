
const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return true
        case 'SET_LOGOUT':
            return false

        default:
            return state
    }
}

export default loginReducer