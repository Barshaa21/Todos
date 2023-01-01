import './App.css';
import Header from './Mycomponents/Header';
import Todos from './Mycomponents/Todos';
import { useState } from 'react';
import Remove from './Mycomponents/Remove';

function App() {

  const [mainState, setmainState] = useState(
    {
      todos: [],
      title: '',
      desc: '',
      toggle: true,
      edit: null
    })

  const submit = (e) => {
    e.preventDefault();
    if (!mainState.title || !mainState.desc) { alert('Title or description cannot be blank') }
    else {
      addTodo(mainState.title, mainState.desc);
      setmainState({...mainState, title: '' })
      setmainState({...mainState, desc: '' })
    }
  }


  const addTodo = (title, desc) => {
    if (mainState.title && !mainState.toggle) {
      setmainState({...mainState,
        todos: (mainState.todos.map((todo) => {
          if (mainState.todo.id === mainState.edit) { return { ...todo, title: mainState.title, desc: mainState.desc } }
          return todo;
        }))
      })
      setmainState({...mainState,title: '' })
      setmainState({...mainState,desc: '' })
      setmainState({...mainState,toggle: true });
      setmainState({...mainState,edit: null })
    }
    else {
      let id = new Date().getTime().toString();
      console.log(id);
      const myTodo = {
        id: id,
        title: mainState.title,
        desc: mainState.desc,
      }
      setmainState({...mainState, todos:[...mainState.todos, myTodo]})
    }
  }

  const editTodo = (id, title, desc) => {
    let editedItem = mainState.todos.find((todo) => {
      return todo.id === id
    });
    setmainState({ ...mainState,title: editedItem.title })
    setmainState({ ...mainState,desc: editedItem.desc })
    setmainState({...mainState, toggle: false });
    setmainState({...mainState, edit: id })
  }

  const deleteall = (todos) => {
    setmainState({...mainState, todos: [] })
  }

  const onDelete = (todo) => {
    setmainState({...mainState,
      todos: (mainState.todos.filter((e) => {
        return e !== todo;
      }))
    })}


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
                  <input type="text" value={mainState.title} onChange={(e) => setmainState({...mainState, title: e.target.value })} className="form-control" id="tiltle" />
                </div>
                <div className="mb-3 container border border-dark " style={{ width: '550px', height: '100px', backgroundColor: "black" }} >
                  <label htmlFor="Description<" className="form-label">Description</label>
                  <input type="text" value={mainState.desc} onChange={(e) => setmainState({ ...mainState,desc: e.target.value })} className="form-control" id="exampleInputPassword1" />
                </div>
                {mainState.toggle ? <button type="submit" className="btn btn-primary border border-dark"><span className="bi bi-trash"></span>Add todo</button> :
                  <button type="submit" className="btn btn-primary border border-dark"><span className="bi bi-trash"></span>Edit todo</button>
                }

              </form>
            </div>
            <Todos todos={mainState.todos} onDelete={onDelete} id={addTodo} editTodo={editTodo} />
            <Remove deleteall={deleteall} />
          </>
        }
      </header>
    </div>
  );
}

export default App;
