import { createSlice } from "@reduxjs/toolkit";
const jobSlice=createSlice({
    name:"job",
    initialState:{
        Jobs:[]
    },
    reducers:{
        addJob:(state,action)=>{
            state.Jobs.push(action.payload)
        },
        deleteJob:(state,action)=>{
            const item=action.payload;
            state.Jobs=state.Jobs.filter((value)=>{
                return value.id!==item.id
            })
        },
        editJob:(state,action)=>{
            const existJob=action.payload.Job;
            const newDetails=action.payload.values;
            state.Jobs.map(items=>{
                if(items.id===existJob.id){
                    items.title=newDetails.title;
                    items.salary=newDetails.salary;
                    items.Company=newDetails.Company;
                    items.description=newDetails.description;
                    items.date=newDetails.date;
                }
                return items;

            })
        }
    }
})

export const {addJob,deleteJob,editJob}=jobSlice.actions
export default jobSlice.reducer