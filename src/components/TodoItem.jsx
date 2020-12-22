import React from 'react'

const TodoItem = ({ task }) => {
    return (
        <div className='todo-item'>
            <input type="checkbox"/>
            { task.text }
        </div>
    )
}

export default TodoItem
