import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './UserRedu'
import { useNavigate } from 'react-router-dom'

function Add() {

    let dis = useDispatch("")
    let [name, setname] = useState("")
    let [x, setx] = useState("")
    let nav = useNavigate("")

    let hendlesumbit = (e) => {
        e.preventDefault()
        dis(add({ name: name, salary: x }))
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
                        value={x}
                        onChange={(e) => { setx(e.target.value) }}
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

export default Add