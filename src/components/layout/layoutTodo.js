import React from 'react'
import './todoStyles.css'

const TodoLayout = (props) => {
  return (
    <div className="todoLayout">
      {props.children}
    </div>
  )
}

export default TodoLayout
