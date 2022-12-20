// import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header'; 
import Todos from './Mycomponents/Todos'; 
// import Todo from './Mycomponents/Todo'; 
// import Footer from './Mycomponents/Footer'; 
import { useState } from 'react';
import Addtodo from './Mycomponents/Addtodo';
// import nature from './components/nature.jpg';

function App() {
  // let initTodo;
  // if(localStorage.getItem("todos")===null){
  //   initTodo=[];
  // }
  // else{
  //   initTodo=JSON.parse(localStorage.getItem("todos"));
  // }
  const addTodo=(title,desc)=>{
    console.log('adding todo',title,desc);
    let sno;
    if(todos.length===0){sno=1;}
    else{sno=todos[todos.length-1].sno + 1;}
  // }
  const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
  // if (localStorage.getItem("todos")){localStorage.setItem("todos",JSON.stringify(todos))}
  // localStorage.setItem("todos",JSON.stringify(todos));
}

  const onDelete=(todo)=>{
    console.log('i am deleted',todo);
    // let index=todos.indexOf(todo);
    // todos.splice(index,1); Deleting this way doesnot work you have to use settodo
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }
   ));
  //  localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos,setTodos]=useState([
  
  ]);

  return (
    <div className="App">
      <header className="App-header" style={{backgroundImage:"url(/rainbow.jpg)"}}>
        {
          <>
            <Header/>
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            {/* <Footer/> */}
          </>
        }
      </header>
    </div>
  );
}

export default App;
