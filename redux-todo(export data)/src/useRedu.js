import { createSlice } from "@reduxjs/toolkit";
import { data1 } from "./data";

export const userSlice = createSlice({

    name: "user",
    initialState: data1,
    reducers: {

        adduser: (state, action) => {
           console.log(action.payload)
           state.push(action.payload)
        },

        edituser: (state, action) => {

            console.log(action)          // ismain payload main object milega.
            console.log(action.payload) 

            let {id,name,salary} = action.payload  //stor the object value

            console.log(name)

          let update1 =   state.find((v)=>{
                return v.id == id
            })

            console.log(update1)

            if(update1)
            {
                update1.id = id;
                update1.name = name;
                update1.salary = salary;
            }
            console.log(update1)
         },
         userdlt:(state,action)=>{
            
            //  console.log(action.payload.dlt)
            let {id} = action.payload
            console.log(id)

            // let deleted = state.find(user=>user.id !== id)

           let xyz =  state.find(xyz=> xyz.id !== id)

            console.log(xyz)
            
        //   if(deleted)
        //   {
        //     return state.filter(user=>user.id !== id)
        //   }

         }
    }
}

)
export let  {adduser} = userSlice.actions
export let {edituser} = userSlice.actions
export let {userdlt} = userSlice.actions
export default userSlice.reducer
