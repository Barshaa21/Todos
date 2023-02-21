import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import { useState } from 'react';
import Remove from './Mycomponents/Remove';
import Forms from './Mycomponents/Forms';

function App() {
  const [todos, setTodos] = useState([]);
  const [con, setCon] = useState({ desc: '', title: '',id:null});
  const submit = (e) => {
    e.preventDefault();
    if (!con.title || !con.desc) { alert('title or description cannot be blank') }
    else {
      addTodo(con.title, con.desc,con.id);
      setCon({ ...con, title: '', desc: '',id:null })
      console.log("submit",con.id)
    }
  }

  const addTodo = (title, desc, id) => {
    if (con.id!=null) {
      setTodos(todos.map((todo) => {
        if (todo.id === con.id) { return { ...todo, title: con.title, desc: con.desc,id:con.id } }
        return todo;
      }) )
    }
    else {
      let id = new Date().getTime().toString();
      // console.log(id);
      const myTodo = {
        id: id,
        title: con.title,
        desc: con.desc,
      }
      setTodos([...todos, myTodo]);
      // console.log(myTodo);

    }
  }


  const editTodo = (id, title, desc) => {
    let editedItem = todos.find((todo) => {
      return todo.id ===id
    });
    setCon({ title: editedItem.title, desc: editedItem.desc,id:editedItem.id})
    console.log('edit ko id',id)
    // setId(id);
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

  const titlechange=(e)=>{
    setCon({ ...con, title: e.target.value })
  }
  const descchange=(e)=>{
    setCon({ ...con, desc: e.target.value })
  }

  return (
    <div className="App">
      <header className="appmain">
        {
          <>
            <Header />
            <Forms submit={submit} title={con.title} desc={con.desc} titlechange={titlechange} descchange={descchange}/>
            <Todos todos={todos} onDelete={onDelete} id={addTodo} editTodo={editTodo} />
            <Remove deleteall={deleteall} />
          </>
        }
      </header>
    </div>
  );
}

export default App;

