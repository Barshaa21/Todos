import React from 'react'
import { useState } from 'react'

export default function Addtodo(props) {
    const [title, setTitle] = useState('');
    const [desc, setdesc] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) { alert('Title or description cannot be blank') }
        else {
            props.addTodo(title, desc);
            setTitle('');
            setdesc('');
        }
    }
    return (
        <div className='div' style={{ color: 'white', paddingTop: '20px', }}>
            <form onSubmit={submit}>
                <div className="container mb-3 border border-dark" style={{ width: '550px', height: '100px', backgroundColor: 'black' }}>
                    <label htmlFor="Title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="tiltle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 container border border-dark " style={{ width: '550px', height: '100px', backgroundColor: "black" }} >
                    <label htmlFor="Description<" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary border border-dark"><span className="bi bi-trash"></span>Add todo</button>

            </form>
        </div>
    )
}
