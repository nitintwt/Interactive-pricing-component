import { createSlice } from "@reduxjs/toolkit"

const initialState ={
  userTrial: false,
  yearly: false,
  views:0,
}

const userSlice = createSlice ({
  name:"user1",
  initialState,
  reducers:{
    userTrial:(state , action) =>{
      state.userTrial = true;
      state.yearly = action.payload;
      state.views = action.payload;
    }
  }
})

export const {userTrial}= userSlice.actions

export default userSlice.reducer