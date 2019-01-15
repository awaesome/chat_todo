const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const fs = require('fs')

app.use(express.static('./build'))

let users = []
let todos = []

function addTodo(todo) {
  todos.push(todo)
  const json = JSON.stringify(todos)
  fs.writeFile('todos.json', json, 'utf8', () => {});
}

function modifyTodo(todo, id) {
  const index = todos.findIndex(todo => todo.id === id)
  todos.splice(index, 1, todo)
  const json = JSON.stringify(todos)
  fs.writeFile('todos.json', json, 'utf8', () => {});
}

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
  const json = JSON.stringify(todos)
  fs.writeFile('todos.json', json, 'utf8', () => {});
}

function loadTodos() {
  fs.readFile('todos.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
        todos = JSON.parse(data)
  }});
}

loadTodos()

io.on('connection', function(socket){
  socket.emit('updateTodo', todos)

  socket.on('log', data => {
    users.push(socket)
    io.emit('log', users.length)
  })

  socket.on('disconnect', () => {
    users.pop()
    socket.broadcast.emit('userLeft', users.length)
  })

  socket.on('addTodo', todo => {
    addTodo(todo)
    io.emit('updateTodo', todos)
  })

  socket.on('removeTodo', id => {
    removeTodo(id)
    io.emit('updateTodo', todos)
  })

  socket.on('modifyTodo', todo => {
    modifyTodo(todo, todo.id)
    io.emit('updateTodo', todos)
  })

  socket.on('newMessage', data => {
    socket.broadcast.emit('newMessage', data)
  })
})

const port = process.env.PORT || 8080

http.listen(port)
