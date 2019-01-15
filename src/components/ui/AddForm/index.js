import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const AddForm = ({ name, text, handleChange, handleSubmit}) => {
  return (
    <form className="addTodo_form" onSubmit = {handleSubmit}>
      <label>
        Todo name: <br />
        <input type="text" name='name' value={name} onChange={handleChange} />
      </label>
      <br /> <br />
      <label>
        Todo description: <br />
        <textarea
          name='text'
          value={text}
          onChange={handleChange}
          rows='3'
          cols='20'
        />
		</label> <br />
		<button className = "addTodoBtn">Add todo</button>
    </form>
  )
}

AddForm.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default AddForm
