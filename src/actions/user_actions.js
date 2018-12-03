import { CREATE_USER, SET_CURRENT_USER, FAILED_LOGIN, LOG_OUT } from './types'
import store from '../store'

export const login = (user) => {
//   store.dispatch({
//     type: SET_CURRENT_USER,
//     payload: user
//   })
// }
}



  export const createUser = (user) => {
    console.log(user);
    fetch(`http://localhost:3000/api/v1/users/`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "user_name": `${user.user_name}`,
        "password": `${user.password}`,
        "first_name": `${user.first_name}`,
        "last_name": `${user.last_name}`,
        "city": `${user.city}`,
        "state": `${user.state}`
      })
    // }).then(res => console.log("Created a new user."))
    }).then(res => res.json())
    .then(created_user => store.dispatch({type: CREATE_USER, user: created_user}))
  }
