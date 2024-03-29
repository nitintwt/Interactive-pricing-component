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
      const { yearly, pageviews } = action.payload;
      state.userTrial = true;
      state.yearly = yearly;
      state.views = pageviews;
    }
  }
})

export const {userTrial}= userSlice.actions

export default userSlice.reducer