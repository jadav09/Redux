import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userReduser";    // import data from userReduser file.

export let store = configureStore({
    reducer:{
        acess:userReduser         // provided data in reduser
    }                     

})

// data store  main agaya.
// ab hame index.js main app ko provie karna hai.taki hum kisi bhi component main use kar sake 