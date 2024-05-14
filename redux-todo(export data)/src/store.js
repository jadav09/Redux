import { configureStore } from "@reduxjs/toolkit"
import useRedu from "./useRedu"

export let store = configureStore({
    reducer:{
        user:useRedu
    }
})