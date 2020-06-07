import React from 'react'

export const Hello = () => {
  return React.createElement(
    'div',
    {id: 'hello',className: 'hello' },
    React.createElement('h1', null, "Hello Tra")
    )
}
