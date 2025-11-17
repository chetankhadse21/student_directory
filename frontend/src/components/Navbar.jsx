import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '0.75rem 1.25rem', borderBottom: '1px solid #eee' }}>
      <Link to="/" style={{ fontWeight: 'bold' }}>Student Directory</Link>
      <div style={{ float: 'right' }}>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}
