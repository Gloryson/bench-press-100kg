import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Alert {
  text: string;
  visibility: boolean;
}


const initialState: Alert = {
  text: '',
  visibility: false,
}


export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    
    showAlert (state, action: PayloadAction<string>) {
      state.text = action.payload;
      state.visibility = true;
    },  

    hideAlert (state) {
      state.text = '';
      state.visibility = false;
    }

  },
})


export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;