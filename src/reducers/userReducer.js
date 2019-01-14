import * as TYPE from '../actions/types'

const initialState = {
  users: 0,
  user: {
    name: '',
    id: ''
  }
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.INIT_USER: { // payload user:{name:{}, id:num}
      return {
        ...state,
        user: {
          name: payload.name,
          id: payload.id
        }
      }
    }
    case TYPE.UPDATE_USERS: {  // payload users-num
      return {
        ...state,
        users: payload
      }
    }
    default:
      return state
  }
}
