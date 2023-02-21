import React from 'react'

export default function Remove({ deleteall }) {
  return (
    <div>
      <button className="btn" onClick={() => { deleteall() }}>Delete all</button>
    </div>
  )
}
