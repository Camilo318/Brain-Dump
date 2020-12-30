import React from 'react'
import TodoList from '../components/TodoList'
import Add from '../components/Add'
import { render, fireEvent, screen } from '@testing-library/react'


describe('Testing the update of the UI', () => {
    
    test('should add a new node to the list', () => {
      render(<Add />)
      fireEvent.change(screen.findByPlaceholderText(/Add your stuff/i),
      { target: { value: '' } })

      const toast = screen.findByText('New item added 😀')

      expect(toast).toBeUndefined()
    })
    
})