import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const tasks = useSelector(state => state.tasks)
    const renderedTasks = tasks.map(task => (
        <TodoItem key={task.id} task={task}/>
    ))
    return (
        <div className='todo-list'>
            {renderedTasks}
        </div>
    )
}

export default TodoList
