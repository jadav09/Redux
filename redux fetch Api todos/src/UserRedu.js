import { createSlice } from "@reduxjs/toolkit";


export let userdata = createSlice({
    name: "jadav",
    initialState: [],
    reducers: {
        showdata: (state, action) => {
            state.push(action.payload)
        },
        add: (state, action) => {

            console.log(action.payload)

            fetch("http://localhost:400/details", {
                method: "POST",
                headers: {"content-type":"application/json" },
                body: JSON.stringify(action.payload)
            })
        },
         edit: (state, action) => {

            fetch("http://localhost:400/details/"+action.payload.id, {
                method: "PUT",
                headers: {"content-type":"application/json" },
                body: JSON.stringify(action.payload)
            })
            console.log(action.payload)
        },

        deleted: (state, action) => {

            console.log(action.payload)

            fetch("http://localhost:400/details/"+action.payload, {
                method: "delete"
            })

            .then((res)=>{
                if(res)
                    {
                        alert("deleted...")
                        window.location.reload()
                    }
            })
        }
    }
})

export default userdata.reducer
export var { showdata, add ,edit,deleted} = userdata.actions