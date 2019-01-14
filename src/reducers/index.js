import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import chatReducer from './chatReducer'
import userReducer from './userReducer'

export default combineReducers({
  todo: todoReducer,
  chat: chatReducer,
  user: userReducer
})
