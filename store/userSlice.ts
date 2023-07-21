import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  initialWeek: number;
}


const initialState: User = {
  initialWeek: 0,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setInitialWeek (state, action: PayloadAction<number>) {
      state.initialWeek = action.payload;
    },

  },
})


export const { setInitialWeek } = userSlice.actions;

export default userSlice.reducer;