import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const TodoList = () => {
    const tasks = useSelector(state => state.tasks)
    const completedTasks = tasks.filter(task => task.completed)
    const activeTasks = tasks.filter(task => !task.completed)
    const { currentView } = useSelector(state => state.views)

    const views = {
        'all': tasks,
        'active': activeTasks,
        'completed': completedTasks
    }

    const renderedTasks = views[currentView].map(task => (
        <TodoItem key={task.id} task={task}/>
    ))
    return (
        <div className='todo-list'>
            {renderedTasks}
        </div>
    )
}

export default TodoList
