import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from './userReduser'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    let {eid} = useParams()
    console.log(eid)
 let nav = useNavigate()

    let editdata = useSelector(state=>state.acess)

    console.log(editdata)

   let update =  editdata.filter((v)=>{
    return v.id == eid
       
    })
    console.log(update[0])


    let [name, setname] = useState(update[0].name)
    let [email, setemail] = useState(update[0].email)
    let [phone, setphone] = useState(update[0].phone)

    let dispatach = useDispatch()

    let hendlesumbit = (e) => {

        e.preventDefault()
        nav("/")

        dispatach(edit({id:eid,name:name,email:email,phone:phone}))

    }
    return (
        <div>
            <form className='w-25 m-auto text-start' onSubmit={hendlesumbit}>

                <div className="mb-3">
                    <label className="form-label">Id</label>
                    
                    <input type="text" className="form-control" disabled
                    value={eid}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control"
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">phone</label>
                    <input type="phone" className="form-control"
                        value={phone}
                        onChange={(e) => { setphone(e.target.value) }}
                    />
                </div>



                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default Edit