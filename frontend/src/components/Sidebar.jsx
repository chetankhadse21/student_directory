import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside style={{ width: 220, borderRight: '1px solid #eee', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/resources">Semester Resources</Link></li>
        <li><Link to="/upload">Upload Resources</Link></li>
        <li><Link to="/attendance">Attendance</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </aside>
  )
}
