import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userdlt } from "./useRedu";

function Home1() {

  let navigate = useNavigate()
  let data = useSelector(state => state.user)

  let dispatch = useDispatch()

  console.log(data)      // arry
  console.log(data[0])  // obj 


  let hendleview = (vid) => {

    navigate("/view/" + vid)
    console.log(vid)
  }

  let hendledit = (eid) => {
    navigate("/edit/"+eid)
  }

  let hendledlt = (dlt)=>{
    console.log(dlt)
   
    dispatch(userdlt({id:dlt}))
  }

  return (
    <div>
      <Link to={"/add"} className="btn btn-primary my-3">Add Employ</Link>

      <table className="table w-50 m-auto my-3">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">salary</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.salary}</td>
                <td>
                  <button className="btn btn-success" onClick={() => { hendleview(v.id) }}>view</button>
                  <button className="btn btn-primary mx-2" onClick={() => { hendledit(v.id) }}>edit</button>
                  <button className="btn btn-danger" onClick={()=>{hendledlt(v.id)}}>delete</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}

export default Home1;
