import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { edit } from './UserRedu'

function Edit() {

    let dis = useDispatch("")
    let [name, setname] = useState("")
    let [salary, setsalary] = useState("")
    let nav = useNavigate("")

    let { eid } = useParams("")

    useEffect(() => {

        fetch("http://localhost:400/details/" + eid)
            .then((res) => { return res.json() })
            .then((op) => {
                setname(op.name)
                setsalary(op.salary)

            })
    }, [])


    let hendlesumbit = (e) => {
        e.preventDefault()
        dis(edit({ id: eid, name: name, salary: salary }))
        nav("/")
        window.location.reload()

    }

    return (
        <div>

            <form onSubmit={hendlesumbit}>
                <div>

                    <label>name</label>
                    <input type="text" value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>
                <br />
                <div>
                    <label>salary</label>
                    <input type="text"
                        value={salary}
                        onChange={(e) => { setsalary(e.target.value) }}
                    />
                </div>
                <br />
                <div>
                    <button>save</button>
                </div>

            </form>
        </div>
    )
}

export default Edit