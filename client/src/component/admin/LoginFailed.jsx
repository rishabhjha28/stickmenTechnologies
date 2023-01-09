import React from 'react'
import {Link} from 'react-router-dom'
export default function LoginFailed() {
  return (
    <div className='App flex-col'>
        <h1>Wrong credentials</h1>
        <p><Link to = '/admin'>Click here</Link> to retry </p>

    </div>
  )
}
