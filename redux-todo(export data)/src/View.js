import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { compose } from 'redux'

function View() {


  let navigate = useNavigate()
  let { vid } = useParams()

  console.log(vid)

  let empdata = useSelector(state => state.user)

  let objdata = empdata.filter((v) => {
    return v.id == vid
  })

  console.log(objdata)  // every time 0 index pe arry milega.

  return (
    <div>
      
      <h1>Id :-{vid}</h1>
      <h1>Name :-{objdata[0].name} </h1>
      <h1>Salary :-{objdata[0].salary}</h1>

      <button className='btn btn-danger' onClick={() => { navigate("/") }}>Exit</button>

    </div>
  )
}

export default View