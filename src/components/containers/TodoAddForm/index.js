import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddForm from '../../ui/AddForm'
import { addTodo } from '../../../actions/todosActions'

class TodoAddForm extends React.Component {
  constructor() {
    super()

    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    name: '',
    text: '',
		isDone: false
  }

  handleChangeInput(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value })
  }

	handleSubmit(event) {
		event.preventDefault()
		this.props.addTodo({...this.state, id: Date.now()})
		this.setState({name: '', text: ''})
	}

  render () {
    const { name, text } = this.state
    return (
      <AddForm
        name = {name}
        text = {text}
        handleChange = {this.handleChangeInput}
        handleSubmit = {this.handleSubmit}
      />
    )
  }
}

TodoAddForm.propTypes = {
	addTodo: PropTypes.func.isRequired
}


export default connect(null, { addTodo })(TodoAddForm)
