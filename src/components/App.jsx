import React from 'react'
import Header from './Header'   
import Navigation from './Navigation'
import Container from './Container'

const App = () => {
    return (
        <>
            <Header />
            <Container >
                <Navigation />
            </Container>
        </>
    )
}

export default App