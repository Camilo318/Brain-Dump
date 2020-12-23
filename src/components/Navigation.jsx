import React, { useRef }from 'react'
import { useDispatch } from 'react-redux'
import { updateView } from '../features/views/actions'

const Navigation = () => {
    const dispatch = useDispatch()
    const currentView = useRef()

    const hadleClick = e => {
        const newView = e.target.dataset.view
        currentView.current?.classList.remove('current')
        currentView.current = e.target
        currentView.current.classList.add('current')
        if (!newView) return 
        dispatch(updateView(newView))
    }
    return (
        <nav>
            <div className="nav__container" onClick={hadleClick}>
                <div className="nav__item" data-view='all'>
                    All
                </div>
                <div className="nav__item" data-view='active'>
                    Active
                </div>
                <div className="nav__item" data-view='completed'>
                    Completed
                </div>
            </div>
        </nav>
    )
}

export default Navigation
