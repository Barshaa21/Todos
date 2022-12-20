import React from 'react'
// import TodoItem from './Mycomponents/TodoItem';
// import TodoItem from './Mycomponents/TodoItem'; 
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div className='container '>
      <h3 className='container text-center my-3 bg-light text-dark rounded border border-dark' style={{width:'200px'}}>Todos list</h3>
      {props.todos.length===0?"No todos to display": props.todos.map((todo) => {
        return(<TodoItem todo= {todo} onDelete={props.onDelete} />)}) }
    </div>
  )
}

export default Todos

