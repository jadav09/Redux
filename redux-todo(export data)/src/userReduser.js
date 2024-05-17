import { createSlice } from "@reduxjs/toolkit";
import { jadav } from "./data";

export let createuser = createSlice({
    name: "anyname",
    initialState: jadav,
    reducers: {

        adddata: (state, action) => {
            console.log(state)
            console.log(action.payload)
            state.push(action.payload)
        },

        edit: (state, action) => {
            console.log(action.payload)  // object


            let { id, name, email, phone } = action.payload

            let change = state.find((v) => {
                return v.id == id
            })

            console.log(change)

            if (change) {
                change.name = name
                change.email = email
                change.phone = phone
            }
        },
        delet: (state, action) => {

            console.log(action.payload)
            console.log(state)

            return state.filter((v) => {
                return v.id != action.payload.id

            })

        }

    }
})

export let { delet } = createuser.actions
export let { edit } = createuser.actions
export let { adddata } = createuser.actions
export default createuser.reducer        //without export default dusri file main data nahi jayega.