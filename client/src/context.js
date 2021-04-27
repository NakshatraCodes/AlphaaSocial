import React from 'react'

// An object called messages
export const list = {
  task1: {
    title: 'buy grocery',
    description: 'pulses, wheat flour, spices'
  },
  task2: {
    title: 'buy vegitables',
    description: 'potato, tomato, chilli'
  }
}

// The HelloContext itself
// - this needs to match the Consumer props
export const Store = React.createContext({
  list: list.task1, // Message Object
  toggleMessage: () => {
    
  },    // Empty Function
})