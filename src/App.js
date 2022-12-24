import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import { useState } from 'react';
// import Addtodo from './Mycomponents/Addtodo';
import Remove from './Mycomponents/Remove';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setdesc] = useState('');
  const [toggle, settoggle] = useState(true);
  const [edit, setedit] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) { alert('Title or description cannot be blank') }
    else {
      addTodo(title, desc);
      setTitle('');
      setdesc('');
    }
  }

  const addTodo = (title, desc) => {
    if (title && !toggle) {
      setTodos(todos.map((todo) => {
          if (todo.id === edit){return {...todo,title:title,desc:desc}}
            return todo;
          })
      )
      settoggle(true);
      setTitle('');
      setdesc('');
      setedit(null);
    }
    else { 
    let id = new Date().getTime().toString();
    console.log(id);
    const myTodo = {
      id: id,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);}
  }

  const editTodo = (id, title, desc) => {
    console.log('i am edit todo');
    let editedItem = todos.find((todo) => {
      return todo.id === id
    });
    settoggle(false);
    setTitle(editedItem.title);
    setdesc(editedItem.desc);
    setedit(id);
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
          
            <div className='div' style={{ color: 'white', paddingTop: '20px', }}>
              <form onSubmit={submit}>
                <div className="container mb-3 border border-dark" style={{ width: '550px', height: '100px', backgroundColor: 'black' }}>
                  <label htmlFor="Title" className="form-label">Todo Title</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="tiltle" />
                </div>
                <div className="mb-3 container border border-dark " style={{ width: '550px', height: '100px', backgroundColor: "black" }} >
                  <label htmlFor="Description<" className="form-label">Description</label>
                  <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                {toggle ? <button type="submit" className="btn btn-primary border border-dark"><span className="bi bi-trash"></span>Add todo</button> :
                  <button type="submit" className="btn btn-primary border border-dark"><span className="bi bi-trash"></span>Edit todo</button>
                }

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
