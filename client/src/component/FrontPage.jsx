import React from 'react'
import { Link } from 'react-router-dom'

export default function FrontPage() {
  return (
    <div className="App">
        <Link to = 'user' className='button'>
            User
        </Link>
        <Link to = 'admin' className='button'>
            Admin
        </Link>
    </div>
  )
}
