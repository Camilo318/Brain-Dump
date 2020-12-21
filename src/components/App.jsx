import React from 'react'
import Header from './Header'   
import Navigation from './Navigation'
import Container from './Container'
import Add from './Add'
import TodoList from './TodoList'

const App = () => {
    return (
        <>
            <Header />
            <Container >
                <Navigation />
                <Add />
                <TodoList />
            </Container>
        </>
    )
}

export default App