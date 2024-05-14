import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adduser } from './useRedu'

function AddEmp() {

  let [name, setname] = useState("")
  let [salary, setsalary] = useState("")

  let next = useSelector(state => state.user)

  console.log(next.length)

  let navigate = useNavigate()
  let dispatch = useDispatch()

  let hendlesumbit = (e) => {
    e.preventDefault();

    navigate("/")

    dispatch(adduser({id:next.length+1,name: name, salary: salary}))
    
  } 

  return (
    <div className='row justify-content-center'>

      <form className='w-25 text-start' onSubmit={hendlesumbit}>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"
            value={name}
            onChange={(e) => { setname(e.target.value) }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="text" className="form-control"
            value={salary}
            onChange={(e) => { setsalary(e.target.value) }}
          />
        </div>

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default AddEmp