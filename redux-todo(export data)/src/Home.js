import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { delet } from './userReduser'

function Home() {

  // get the data into store useSelecter()

  let data = useSelector(state => state.acess)
  let nav = useNavigate()
  let dispatch = useDispatch()

  console.log(data)   // ary

  let hendleview = (vid) => {
    console.log(vid)
    nav("/view/" + vid)

  }

  let hendledit = (eid) => {
    nav("/edit/" + eid)

  }

  let hendledelt = (dlt) => {
    dispatch(delet({ id: dlt }))

  }

  return (
    <div>
      <Link to={"/add"}><button className='btn btn-primary my-2 '>Add Info</button></Link>
      <table className="table w-50 m-auto border">
        <thead className='table-dark'>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data && 
            data.map((v) => (
              <tr key={v.id}>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
                <td>
                  <button className='btn btn-success' onClick={() => { hendleview(v.id) }}>View</button>
                  <button className='btn btn-primary mx-3' onClick={() => { hendledit(v.id) }}>Edit</button>
                  <button className='btn btn-danger' onClick={() => { hendledelt(v.id) }}>Delete</button>
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