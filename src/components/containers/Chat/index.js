import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ChatUI from '../../ui/ChatUI'
import socket from '../../../actions/initSocket'
import { reciveMessage, sendMessage } from '../../../actions/chatActions'
import { updateUsers } from '../../../actions/userActions'

class Chat extends Component {
  constructor() {
    super()

		socket.on('connect', () => {
		  socket.emit('log', this.props.user.name)
		})
    socket.on('newMessage', data => this.props.reciveMessage(data))
    socket.on('log', users => this.props.updateUsers(users))
    socket.on('userLeft', users => this.props.updateUsers(users))

    this.handleMessageSend = this.handleMessageSend.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  state = {
    message: ''
  }

  handleMessageSend(event) {
    event.preventDefault()
		if (this.state.message === '') return
    const { user } = this.props
    this.props.sendMessage(user, this.state.message)
    this.setState({message: ''})
		this.scrollDiv = event.target.getElementsByClassName('chatWindow')[0]
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentWillUnmout() {
    socket.removeAllListeners()
  }

	componentDidUpdate() {
		if (this.scrollDiv)
			this.scrollDiv.scrollTop = this.scrollDiv.scrollHeight
	}

  render () {
    const { message } = this.state
    const { users, user: {id}, messages } = this.props

    return (
			<ChatUI
				users = {users}
				id = {id}
				message = {message}
				messages = {messages}
				handleMessageSend = {this.handleMessageSend}
				handleInputChange = {this.handleInputChange}
			/>
    )
  }
}

Chat.propTypes = {
  users: PropTypes.number.isRequired,
	user: PropTypes.object.isRequired,
	messages: PropTypes.array.isRequired,
	reciveMessage: PropTypes.func.isRequired,
	sendMessage: PropTypes.func.isRequired,
	updateUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	users: state.user.users,
  user: state.user.user,
  messages: state.chat.messages
})

export default connect(
	mapStateToProps,
	{ reciveMessage, sendMessage, updateUsers }
)(Chat)
