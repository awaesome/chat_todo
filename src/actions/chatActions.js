import * as TYPE from './types'
import socket from './initSocket'

export const sendMessage = (user, message) => {
  socket.emit('newMessage', { user, message })
  return {
    type: TYPE.SEND_MESSAGE,
    payload: { user, message }
  }
}

export const reciveMessage = ({ user, message }) => ({
  type: TYPE.RECIVE_MESSAGE,
  payload: { user, message }
})
