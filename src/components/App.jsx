import React from 'react'
import Header from './Header'   
import Navigation from './Navigation'
import Container from './Container'
import Add from './Add'

const App = () => {
    return (
        <>
            <Header />
            <Container >
                <Navigation />
                <Add />
            </Container>
        </>
    )
}

export default App