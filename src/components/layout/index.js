import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../containers/Modal'
import { initUser } from '../../actions/userActions'
import './styles.css'

class Layout extends Component {
	constructor() {
		super()

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	state = {
		name: ''
	}

	handleInputChange(event) {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit(event) {
		if (this.state.user === '') return
		this.props.initUser(this.state.name)
		this.setState({ name: '' })
	}

	render() {
		const { user } = this.props
		const { name } = this.state
		const modal = user.name === ''
		?
			<Modal>
				<div className="loginOverlay">
					<form className="loginContainer" onSubmit={this.handleSubmit}>
						<h3 className="loginTitle">pick name, username, nickname or whatever</h3>
						<div className="inputContainer">
							<input
								className="inputInput"
								type="text"
								name="name"
								value={name}
								onChange={this.handleInputChange}
							/>
						<button className="inputBtn" disabled = {!name}>Done</button>
						</div>
					</form>
				</div>
			</Modal>
		: null
		return (
			<div className="layout">
				{modal}
				{this.props.children}
			</div>
		)
	}
}

export default connect(
	state => ({user: state.user.user}),
	{ initUser }
)(Layout)
