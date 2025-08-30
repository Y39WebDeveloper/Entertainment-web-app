import { useEffect, useState } from 'react'
import data from './data.json'
import './App.css'

function App() {

  if(!data) return <div>Loading...</div>

  return (
    <>
      <div>{data.map((d,i)=><h1 key={i}>{d.title}</h1>)}</div>
    </>
  )
}

export default App
