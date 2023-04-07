import { configureStore } from "@reduxjs/toolkit";
import jobslice from "./jobslice";

const store=configureStore(
    {
        reducer:{
            job:jobslice
        }
    }
)
export default store