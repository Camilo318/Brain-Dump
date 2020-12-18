import React, { useState } from 'react'
import data from './data.json'

const App = () => {
    const [list, setList] = useState([])
    const handleClick = () => {
        setList(data.loaders)
    }
    return (
        <div>
            <h1>Billie Eilish</h1>
        </div>
    )
}

export default App