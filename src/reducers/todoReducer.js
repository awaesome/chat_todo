import * as TYPE from '../actions/types'

const initialState = {
  todos: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.ADD_TODO: {
      return state
    }
    case TYPE.MODIFY_TODO: {
      return state
    }
    case TYPE.REMOVE_TODO: {
      return state
    }
    case TYPE.UPDATE_TODO: {
      return {
        todos: payload
      }
    }
    default:
      return state
  }
}
