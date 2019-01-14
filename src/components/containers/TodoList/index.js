import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from '../TodoItem'
import { connect } from 'react-redux'
import { updateTodo } from '../../../actions/todosActions'
import socket from '../../../actions/initSocket'
import './styles.css'


class TodoList extends Component {
	constructor() {
		super()

		socket.on('updateTodo', todos => this.props.updateTodo(todos))
	}

  render () {
    const { todos } = this.props
		
    return (
      <div className="todoList">
        {
          todos.length !== 0 && todos.map(todo => <TodoItem key={ todo.id }  todo={ todo }/>)
        }
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	todos: state.todo.todos
})

export default connect(mapStateToProps, { updateTodo })(TodoList)
