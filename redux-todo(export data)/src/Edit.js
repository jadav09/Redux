import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { edituser } from './useRedu'

function Edit() {

  let navigate = useNavigate()
  let {eid} = useParams()

  let editInfo = useSelector(state=>state.user)

  let sbmt = editInfo.filter((v)=>{
    return v.id==eid
  }) 

  let {name,salary} = sbmt[0]


  let [ename,setename] = useState(name)
  let [esalary,setesalary] = useState(salary)
  let dispatch = useDispatch()

  let hendlesumbit =(e)=>{

    e.preventDefault()
    dispatch(edituser({id:eid,name:ename,salary:esalary}))
    navigate("/")

  }


  return (
    <div>
      <form className='w-25 text-start m-auto' onSubmit={hendlesumbit}>

      <div className="mb-3">
          <label className="form-label">Id</label>
          <input type="text" className="form-control"
          value={eid}
          disabled
          />
    </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"
          value={ename}
          onChange={(e)=>{setename(e.target.value)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="text" className="form-control"
               value={esalary}
               onChange={(e)=>{setesalary(e.target.value)}}

          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Edit