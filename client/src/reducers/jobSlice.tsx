import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import client from "../api/client"

interface JobType {
    job:any,
    jobs:Array<{}>
    success:boolean,
    error:boolean
}

const initialState:JobType = {
    job:{},
    jobs:[],
    success:false,
    error:false
}

export const newJob = createAsyncThunk('/jobs/new', async(values:any, {rejectWithValue}) =>{
     try {
        const response = await client.post('/', values);
        return response.data
     } catch (error) {
        rejectWithValue(error)
     }
});

export const getJob = createAsyncThunk('/jobs/:id', async(id:string, {rejectWithValue}) => {
    try {
       const response = await client.get('/jobs/'+id);
       return response.data
    } catch (error) {
        rejectWithValue(error)
    }
});

export const getJobs = createAsyncThunk('/jobs/find', async(values, {rejectWithValue}) => {
    try {
       const response = await client.get('/jobs');
       return response.data
    } catch (error) {
        rejectWithValue(error)
    }
});

export const updateJob = createAsyncThunk('/jobs/update', async({id,values}:any, {rejectWithValue}) => {
    try {
       const response = await client.put('/jobs/'+id, values);
       return response.data
    } catch (error) {
        rejectWithValue(error)
    }
});

export const deleteJob = createAsyncThunk('/jobs/delete', async(id:string, {rejectWithValue}) => {
    try {
       const response = await client.delete('/jobs/'+id);
       return response.data
    } catch (error) {
        rejectWithValue(error)
    }
});
export const jobSlice = createSlice({
    name:"job",
    initialState,
    reducers:{
        reset: (state) =>{
            state.jobs = []
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(newJob.pending, (state)=>{
            state.success = false
        });
       builder.addCase(newJob.fulfilled, (state)=>{
        state.success = true
       });
       builder.addCase(newJob.rejected, (state)=>{
        state.success = false
       });
       builder.addCase(getJob.fulfilled, (state, action)=>{
        state.job = action.payload
       });
      builder.addCase(getJobs.fulfilled, (state, action)=>{
        state.jobs = action.payload
      });
      builder.addCase(updateJob.pending, (state)=>{
        state.success = false
       });
      builder.addCase(updateJob.fulfilled, (state)=>{
        state.success = true
      });
      builder.addCase(updateJob.rejected, (state)=>{
        state.success = false
      });
      builder.addCase(deleteJob.pending, (state)=>{
        state.success = false
       });
       builder.addCase(deleteJob.fulfilled, (state)=>{
        state.success = true
       });
       builder.addCase(deleteJob.rejected, (state)=>{
        state.success = false
       });
    }
 })

export const {reset} = jobSlice.actions
export default jobSlice.reducer