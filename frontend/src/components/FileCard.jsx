import React from 'react'

export default function FileCard({ file }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '0.75rem', borderRadius: 6 }}>
      <h4>{file.name}</h4>
      <small>{file.type}</small>
    </div>
  )
}
