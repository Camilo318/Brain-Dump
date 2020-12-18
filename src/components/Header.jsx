import React from 'react'

const Header = ({ children }) => {
    return (
        <header>
            <div className="header__logo">
                { children }
            </div>
        </header>
    )
}

export default Header
