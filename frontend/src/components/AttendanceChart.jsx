import React from 'react'

export default function AttendanceChart({ data }) {
  return (
    <div style={{ padding: 12, border: '1px solid #eee', borderRadius: 6 }}>
      <strong>Attendance Chart</strong>
      <pre>{JSON.stringify(data || {}, null, 2)}</pre>
    </div>
  )
}
