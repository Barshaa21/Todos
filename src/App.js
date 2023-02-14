import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import { useState } from 'react';
import Remove from './Mycomponents/Remove';
import bg from './Mycomponents/bg.jpg';


function App() {
  const [todos, setTodos] = useState([]);
  const [con, setCon] = useState({ desc: '', title: '',id:null});
  // const [id, setId] = useState(null);


  const submit = (e) => {
    e.preventDefault();
    if (!con.title || !con.desc) { alert('title or description cannot be blank') }
    else {
      addTodo(con.title, con.desc,con.id);
      setCon({ ...con, title: '', desc: '',id:null })
    }
  }

  const addTodo = (title, desc, id) => {
    if (con.id!=null) {
      setTodos(todos.map((todo) => {
        if (todo.id === con.id) { return { ...todo, title: con.title, desc: con.desc,id:con.id } }
        return todo;
      })
      )
      setCon({ title: '', desc: ''});
    }
    else {
      let id = new Date().getTime().toString();
      console.log(id);
      const myTodo = {
        id: id,
        title: con.title,
        desc: con.desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);

    }
  }


  const editTodo = (id, title, desc) => {
    let editedItem = todos.find((todo) => {
      return todo.id ===id
    });
    setCon({ title: editedItem.title, desc: editedItem.desc,id:editedItem.id})
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
      <header className="App-header" style={{ backgroundColor: " grey" ,backgroundImage:"url(/bg.jpg)"}}>
        {
          <>
            <Header />
            <div className='div' style={{ color: 'white', paddingTop: '20px', }}>
              <form onSubmit={submit}>
                <div className="container mb-3 border border-dark" style={{ width: '550px', height: '100px', backgroundColor: 'black' }}>
                  <label htmlFor="Title" className="form-label">Todo Title</label>
                  <input type="text" value={con.title} onChange={(e) => setCon({ ...con, title: e.target.value })} className="form-control" />
                </div>
                <div className="mb-3 container border border-dark " style={{ width: '550px', height: '100px', backgroundColor: "black" }} >
                  <label htmlFor="Description" className="form-label">Description</label>
                  <input type="text" value={con.desc} onChange={(e) => setCon({ ...con, desc: e.target.value })} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary border border-dark"><span className="bi bi-trash"></span>Add todo</button>
              </form>
            </div>
            <Todos todos={todos} onDelete={onDelete} id={addTodo} editTodo={editTodo} />
            <Remove deleteall={deleteall} />
          </>
        }
      </header>
    </div>
  );
}

export default App;
