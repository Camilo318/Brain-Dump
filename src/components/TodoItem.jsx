import React from 'react'
import { useDispatch } from 'react-redux'

const TodoItem = ({ task }) => {
    const dispatch = useDispatch()
    const checked = task.completed
    const toggleTask = () => {
        dispatch({
            type: 'tasks/toggle-task',
            payload: task.id
        })
    }

    return (
        <div className='todo-item'>
            <input type='checkbox'
            onClick={toggleTask}
            defaultChecked={checked}/>
            <span>{ task.text }</span>
        </div>
    )
}

export default TodoItem
