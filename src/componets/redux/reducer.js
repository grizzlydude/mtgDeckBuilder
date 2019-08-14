// inital state
const intialState = {
    usernameEmail: '',
    password: '',
    userid: 0
}

// Action constants
const SET_USER = 'SET_USER'

// Action builders
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

// Reducer
export default (state = intialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            const { usernameEmail, password } = payload
            return { ...state, usernameEmail, password }
        default: return state
    }
}