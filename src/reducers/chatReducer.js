import * as TYPE from '../actions/types'

const initialState = {
  messages: [
    {
      user: { id: 14351212, name: 'bug'},
      message: 'i will be book'
    },
    {
      user: { id: 16666632, name: 'gook'},
      message: 'i will be cook'
    },
    {
      user: { id: 14614552, name: 'hak'},
      message: 'i will be hook'
    }
  ]
}

// payload: { user:{}, message:''}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case TYPE.SEND_MESSAGE: {
      console.log(payload)
      return {
        messages: [...state.messages, payload]
      }
    }
    case TYPE.RECIVE_MESSAGE: {
      return {
        messages: [...state.messages, payload]
      }
    }
    default:
      return state
  }
}
