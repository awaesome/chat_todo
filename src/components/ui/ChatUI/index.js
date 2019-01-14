import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import './styles.css'

const ChatUI = props => {
    const { users, id, message, messages, handleMessageSend, handleInputChange } = props

    return (
      <Fragment>
				<div className="usersIndicator">
					online: <span>{users}</span>
				</div>
	      <form onSubmit={handleMessageSend} className = "chatForm">
	        <div className="chatWindow">
	          {
	            messages.map((message, i) => (
	              <div key={i} className={message.user.id === id ? "message my_message" : "message"}>
	                <span className="messageUser">{ message.user.name }</span>
	                <p className="messageText">{ message.message  }</p>
	              </div>
	            ))
	          }
	        </div>
	        <input
	          className = "chat_input"
	          type = "text"
	          name = "message"
	          value = { message }
	          onChange= { handleInputChange }
	        />
	      </form>
			</Fragment>
    )
}

ChatUI.propTypes = {
  users: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  handleMessageSend: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default ChatUI;
