import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div className='container Todos' >
      <h2 >Todos list</h2>
      {props.todos.length === 0 ? "No todos to display" : props.todos.map((todo) => {
        return (<div key={todo.id}><TodoItem todos={props.todos} todo={todo} editTodo={props.editTodo} onDelete={props.onDelete} /></div>)
      })}
    </div>
  )
}

export default Todos

