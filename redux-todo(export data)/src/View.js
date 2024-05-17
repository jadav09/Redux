import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

function View() {

    let {vid} = useParams()       
    console.log(vid)

    let nav  = useNavigate()

    let viewdata = useSelector(state=>state.acess)
    console.log(viewdata)

  const viewid =   viewdata.filter((v)=>{
        return v.id == vid 
    })

    console.log(viewid[0]) 

  return (
    <div>
        <h1>Id:-{vid}</h1>
        <h1>Name:-{viewid[0].name}</h1>
        <h1>Email:-{viewid[0].email}</h1>
        <h1>Phone:-{viewid[0].phone}</h1>
        <button className='btn btn-danger' onClick={()=>{nav("/")}}>Exit</button>
    </div>
  )
}

export default View