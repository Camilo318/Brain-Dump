import React from 'react'

const TodoItem = ({ task }) => {
    return (
        <div className='todo-item'>
            { task.text }
        </div>
    )
}

export default TodoItem
