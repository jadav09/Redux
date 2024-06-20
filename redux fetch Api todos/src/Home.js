
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleted } from './UserRedu'

function Home() {

  let nav = useNavigate("")
  let dis = useDispatch("")
 
  let getdata = useSelector((state) => state.acess)
  console.log(getdata)



  let hendleview = (vid)=>{
    nav("/view/"+vid)

  }

  let hendleedit = (eid)=>{
    nav("/edit/"+eid)

  }

  let hendledelte = (dlt)=>{
   
    dis(deleted(dlt))

  }

  return (

    <div>

      <h2>Redux crude with FetchApi</h2>

      <button onClick={() => { nav("/add") }}>Add Emplooyes</button>

      <table className='table w-50 m-auto'>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            getdata[0] && getdata[0].map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.salary}</td>
                <td>
                  <button onClick={()=>{hendleview(v.id)}}>View</button>
                  <button className='mx-2' onClick={()=>{hendleedit(v.id)}} >Edit</button>
                  <button onClick={()=>{hendledelte(v.id)}}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home