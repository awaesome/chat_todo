import io from 'socket.io-client'

const socket = io('https://todo-chat.herokuapp.com/')

export default socket
