import React from 'react'

export default function Remove({deleteall}) {
  return (
    <div>
       <button className="btn btn-primary btn-sm" onClick={() => { deleteall() }}>Delete all</button>
    </div>
  )
}
