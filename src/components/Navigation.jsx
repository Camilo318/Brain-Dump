import React, { useState } from 'react'

const Navigation = () => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        //Pending state transaction.
        setCount(c => c + 1)
        //Accessing the state immediately after updating
        //can return an old value
        console.log(count)
    }
    return (
        <nav>
            <div className="nav__container" onClick={incrementCount}>
                <div className="nav__item">
                    All
                </div>
                <div className="nav__item">
                    Active
                </div>
                <div className="nav__item">
                    Completed
                </div>
            </div>
        </nav>
    )
}

export default Navigation
