import * as TYPE from './types'
import socket from './initSocket'

export const addTodo = todo => {
  socket.emit('addTodo', todo)
  return {
    type: TYPE.ADD_TODO
  }
}

export const modifyTodo = todo => {
  socket.emit('modifyTodo', todo)
  return {
    type: TYPE.MODIFY_TODO
  }
}

export const removeTodo = id => {
  socket.emit('removeTodo', id)
  return {
    type: TYPE.REMOVE_TODO
  }
}

export const updateTodo = todos => {
  return {
    type: TYPE.UPDATE_TODO,
    payload: todos
  }
}
