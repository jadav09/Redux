import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adddata } from './userReduser'

function Addinfo() {

    let userdata = useSelector(state=>state.acess)

    console.log(userdata)

    let nevigate  = useNavigate()

    let dispatch = useDispatch()

    let [adname,setadname] = useState("")
    let [ademail,setademail] = useState("")
    let [adphone,setadphone] = useState("")

    let hendlesumbit =(e)=>{

        e.preventDefault()
        nevigate("/") 
        dispatch(adddata({id:userdata.length+1,name:adname,email:ademail,phone:adphone}))

          

    }
    return (
        <div>
            <form className='w-25 m-auto text-start' onSubmit={hendlesumbit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                    value={adname}
                    onChange={(e)=>{setadname(e.target.value)}}
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                     value={ademail}
                     onChange={(e)=>{setademail(e.target.value)}}
                     />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="number" className="form-control"
                     value={adphone}
                     onChange={(e)=>{setadphone(e.target.value)}}
                    />
                </div>

              

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default Addinfo