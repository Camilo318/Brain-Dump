import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, deleteTask } from '../features/tasks/actions'
import del from '../assets/images/trash.svg'
import edit from '../assets/images/edit.svg'

const TodoItem = ({ task }) => {
    const dispatch = useDispatch()
    const checked = task.completed

    const toggle = () => {
        dispatch(toggleTask(task.id))
    }
    const remove = () => {
        dispatch(deleteTask(task.id))
    }

    return (
        <div className='todo-item'>
            <input type='checkbox'
            onClick={toggle}
            defaultChecked={checked}/>

            <span>{ task.text }</span>

            <img
            className='edit'
            src={edit}
            alt={'Edit task'}/>
            
            <img
            onClick={remove}
            src={del}
            alt="Delete task"/>

        </div>
    )
}

export default TodoItem
