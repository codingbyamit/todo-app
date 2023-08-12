import React from 'react'

function SingleTodo(params) {
  return (
    <div className='single-todo'>
        <p>{params.note}</p>
    </div>
  )
}

export default SingleTodo