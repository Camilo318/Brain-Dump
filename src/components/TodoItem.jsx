import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask } from '../features/tasks/actions'

const TodoItem = ({ task }) => {
    const dispatch = useDispatch()
    const checked = task.completed

    const toggle = () => {
        dispatch(toggleTask(task.id))
    }

    return (
        <div className='todo-item'>
            <input type='checkbox'
            onClick={toggle}
            defaultChecked={checked}/>
            <span>{ task.text }</span>
        </div>
    )
}

export default TodoItem
