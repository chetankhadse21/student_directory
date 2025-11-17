import React from 'react'
import FileCard from '../components/FileCard'

export default function SemesterResources() {
  const files = [{name: 'Syllabus.pdf', type: 'pdf'}]
  return (
    <div>
      <h2>Semester Resources</h2>
      {files.map((f, i) => <FileCard key={i} file={f} />)}
    </div>
  )
}
