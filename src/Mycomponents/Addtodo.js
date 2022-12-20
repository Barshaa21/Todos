import React from 'react'
import { useState } from 'react'

export default function Addtodo(props) {
    const[title,setTitle]=useState('');
    const[desc,setdesc]=useState('');
    const submit=(e)=>{
            e.preventDefault();
            if(!title||!desc){alert('Title or desc acnnot be blank')}
            else{
            props.addTodo(title,desc);
            setTitle('');
            setdesc('');
            }
    }
    return (
        <div className='div'style={{color:'white',paddingTop:'20px',}}>
            <form onSubmit={submit}>
                <div className="container mb-3 border border-dark" style={{width:'550px',height:'100px',backgroundImage:"url(/galaxy.jpg)"}}>
                    <label htmlFor="Title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="tiltle" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3 container border border-dark " style={{width:'550px',height:'100px',backgroundImage:"url(/galaxy.jpg)"}} >
                    <label htmlFor="Description<" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input  text-light" id="exampleCheck1"/>
                        <label className="form-check-label text-light" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary border border-dark"><span class="bi bi-trash"></span>Add todo</button>
                
            </form>
        </div>
    )
}
