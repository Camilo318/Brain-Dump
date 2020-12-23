import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import toast, { Toaster } from 'react-hot-toast'

import { addTask } from '../features/tasks/actions'

const Add = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const notify = () => toast.success('New item added 😀')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleKeyDown = e => {
        const txt = e.target.value.trim()

        if (e.which === 13 && txt) {
            const id = uniqid()
            dispatch(addTask({id, text: txt}))
            notify()
            setText('')
        }
    }

    return (
        <div className='add'>
            <input
            id='addInput'
            type="text"
            placeholder='Add your stuff'
            value={text}
            autoFocus={true}
            onChange={handleChange}
            onKeyDown={handleKeyDown}/>
            <Toaster />
            <button>Add</button>
        </div>
    )
}

export default Add
