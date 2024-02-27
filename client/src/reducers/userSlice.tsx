import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import client from "../api/client"
import Swal from "sweetalert2";

export interface UserState {
    user:any,
    users:Array<{}>,
    loading:boolean,
    success:boolean,
    error:boolean,
    loggedIn:boolean
}
const initialState:UserState = {
    user:{},
    users:[],
    loading:false,
    success:false,
    error:false,
    loggedIn:false
}
export const login = createAsyncThunk('/users/login', async(values:any, {rejectWithValue}) => {
    try {
        const response = await client.post('/user/login',values)
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
export const getUsers = createAsyncThunk('/users', async(values:any, {rejectWithValue})=>{
    try {
        const response = await client.get('/users');
        return response.data.users
    } catch (error) {
        return rejectWithValue(error);
    }
});
export const getUser = createAsyncThunk('/users/:id', async(id:string, {rejectWithValue})=>{
    try {
        const response = await client.get('/users/'+id);
        return response.data.user
    } catch (error) {
        return rejectWithValue(error);
    }
});
export const updateUser = createAsyncThunk('/users/updateprofile', async({id,values}:any, {rejectWithValue}) => {
    try {
        const response = await client.put('/users/'+id, values)
        return response.data.user
    } catch (error) {
        return rejectWithValue(error);
    }
});
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:(state) =>{
            localStorage.clear()
            state.user = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
          state.user = action.payload;
          state.loggedIn = true
        });
        builder.addCase(login.rejected, (state,action:any) =>{
           state.error = true
           Swal.fire('Error', action.payload.message, 'error')
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
           state.success = true
           state.user = action.payload
        });
        builder.addCase(getUser.pending, (state) =>{
            state.loading = true
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false
        });
        builder.addCase(getUsers.fulfilled, (state, action)=>{
            state.users = action.payload
        });
      }
})
export const {logout} = userSlice.actions
export default userSlice.reducer