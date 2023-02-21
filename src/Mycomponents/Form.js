import React from 'react'

export default function Forms({titlechange,submit,title,desc,descchange}) {
    return (
        <div>
            <div className='con'>
                <form onSubmit={submit}>
                    <div className="form container">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" value={title} onChange={titlechange} className="form-control" />
                    </div>
                    <div className="form container" >
                        <label htmlFor="Description" className="form-label">Description</label>
                        <input type="text" value={desc} onChange={descchange} className="form-control" />
                    </div>
                    <button type="submit" className="btn">Add todo</button>
                </form>
            </div>
        </div>
    )
}
