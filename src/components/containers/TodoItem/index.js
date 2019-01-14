import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Todo from '../../ui/Todo'
import { modifyTodo, removeTodo } from '../../../actions/todosActions'

import Modal from '../Modal'
import './styles.css'


class TodoItem extends Component {
  constructor() {
    super()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  state = {
		isModal: false,
		todo: {
			isDone: false,
			name: '',
			text: '',
			id: 0
		}
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? this.state.todo.isDone : target.value
    const name = target.name

		this.setState({
			todo: {
				...this.state.todo,
				[name]: value
			}
		})

		if (target.type === 'checkbox')
			this.props.modifyTodo({...this.state.todo, isDone: !this.state.todo.isDone})
  }

  handleOpenModal(event) {
    this.setState({isModal: true})
  }

  handleCloseModal(event) {
    event.preventDefault()
    event.currentTarget === event.target
			&& this.setState({
				isModal: false,
				todo: {
					...this.props.todo
				}
			})
  }

	handleSave(event) {
		this.setState({isModal: false})
		this.props.modifyTodo(this.state.todo)
	}

  componentDidMount() {
    this.setState({
			todo: { ...this.props.todo }
		})
  }

	componentDidUpdate(prevProps) {
		if (this.props.todo.name !== prevProps.todo.name
			|| this.props.todo.text !== prevProps.todo.text
			|| this.props.todo.isDone !== prevProps.todo.isDone) {
				this.setState({
					todo: { ...this.props.todo }
				})
			}
	}

  render () {
    const { isModal, todo: { isDone, name, text, id } } = this.state

    const modal = isModal
      ? <Modal>
          <div onClick={this.handleCloseModal} className="modalWrapper">
            <div className="modal">
              <input
                onChange={this.handleInputChange}
                type="text"
                className="todoItemName todoItemName-input"
                value={name}
                name="name" />

              <textarea
                onChange={this.handleInputChange}
                className="todoItemText"
                value={text}
                name='text' />

							<button className = "todoItemSaveBtn" onClick = {this.handleSave}>Save changes</button>
            </div>
          </div>
        </Modal>
      : null

    return <Todo
      modal = {modal}
      isDone = {isDone}
      name = {name}
			id = {id}
      handleInputChange = {this.handleInputChange}
      handleOpenModal = {this.handleOpenModal}
			handleRemoveTodo = {this.props.removeTodo}
    />
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
	modifyTodo: PropTypes.func.isRequired,
	removeTodo: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
	return {
		modifyTodo(todo) {
			dispatch(modifyTodo(todo))
		},
		removeTodo(id) {
			dispatch(removeTodo(id))
		}
	}
}

export default connect(null, mapDispatchToProps)(TodoItem)
