export const addTask = task => {
    return {
        type: 'tasks/add-task',
        payload: task
    }
}

export const loadTasks = tasks => {
    return {
        type: 'tasks/load-tasks',
        payload: tasks
    }
}


export const deleteTask = id => {
    return {
        type: 'tasks/delete-task',
        payload: id
    }
}

export const toggleTask = id => {
    return {
        type: 'tasks/toggle-task',
        payload: id
    }
}