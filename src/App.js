import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import { useState } from 'react';
import Addtodo from './Mycomponents/Addtodo';
import Remove from './Mycomponents/Remove';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title, desc) => {
    let id = new Date().getTime().toString();
    console.log(id);
    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const deleteall = (todos) => {
    setTodos([]);
  }
  const onDelete = (todo) => {
    console.log('i am deleted', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }
    ));
  }
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: " #DA70D6" }}>
        {
          <>
            <Header />
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} id={addTodo} />
            <Remove deleteall={deleteall} />
          </>
        }
      </header>
    </div>
  );
}

export default App;
