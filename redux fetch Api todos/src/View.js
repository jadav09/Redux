import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function View() {

  let {vid} = useParams("")
  let nav = useNavigate("")

  let [data,setdata] = useState("")
  useEffect(()=>{

    fetch("http://localhost:400/details/"+vid)
    .then((res)=>{return res.json()})
    .then((op)=>{
      console.log(op)
      setdata(op)
    })
    
  },[])
  return (
    <div>
      <h2>id:{data.id}</h2>
      <h2>name:{data.name}</h2>
      <h2>salary:{data.salary}</h2>
      <button onClick={()=>{nav("/")}}>exit</button>
    </div>
  )
}

export default View