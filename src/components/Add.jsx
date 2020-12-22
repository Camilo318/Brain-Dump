import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'

const Add = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleKeyDown = e => {
        const txt = e.target.value.trim()

        if (e.which === 13 && txt) {
            const id = uniqid()
            dispatch({
                type: 'tasks/add-task',
                payload: {
                    id,
                    text: txt
                }
            })

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
            <button>Add</button>
        </div>
    )
}

export default Add
