import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Todo = (props) => {
    const { isDone, name, modal, id, handleInputChange, handleOpenModal, handleRemoveTodo } = props

    return (
      <Fragment>
        {modal}
        <div className="todoItemWrapper">
          <div className="todoItem">
            <input
							className="todoCheckbox"
              name="isDone"
              type="checkbox"
              checked={isDone}
              onChange={handleInputChange}
            />
            <h2 className={`todoItemName ${isDone ? "done" : null}`} onClick={handleOpenModal}>{ name }</h2>
            <button
							className = 'deleteBtn'
							style = {{
								backgroundColor: `${!isDone ? 'purple' : 'green'}`,
								cursor: `${!isDone ? 'not-allowed' : 'pointer'}`}}
							onClick = {() => handleRemoveTodo(id)}
							disabled = {!isDone}
						>
							X
						</button>
          </div>
        </div>
      </Fragment>
    )
}

Todo.propTypes = {
  modal: PropTypes.element,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
}

export default Todo;
