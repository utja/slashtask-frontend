import { CREATE_USER, SET_CURRENT_USER, FAILED_LOGIN, LOG_OUT } from '../actions/types'

const initialState = {
  users: [],
  currentUser: null,
  authenticatingUser: false,
  loggedIn: false,
  failedLogin: false,
  error: null
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload, // coming over as action.payload from setCurrentUser
        loggedIn: true,
        authenticatingUser: false
      }
    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: true,
        error: action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        currentUser: null,
        authenticatingUser: false,
        loggedIn: false,
        failedLogin: false,
        error: false
      }
    default:
      return state
  }
}


export default usersReducer
