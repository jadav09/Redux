import { configureStore } from "@reduxjs/toolkit";
import UserRedu from "./UserRedu";

export var store = configureStore({
    reducer: {
        acess: UserRedu
    }
})