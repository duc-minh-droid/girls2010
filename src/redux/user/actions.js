import userTypes from './types'

export const setCurrentUser = (user) => {
    return {
        type: userTypes.SET_CURRENT_USER,
        payload: user
    }
}