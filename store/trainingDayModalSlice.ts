import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TrainingDayModal {
  exercises: string[];
  visibility: boolean;
}


const initialState: TrainingDayModal = {
  exercises: [],
  visibility: false,
}


export const trainingDayModalSlice = createSlice({
  name: 'trainingDayModal',
  initialState,
  reducers: {
    
    showAlert (state, action: PayloadAction<string>) {
      
    },  

    hideAlert (state) {
      state.exercises = [];
      state.visibility = false;
    }

  },
})


export const { showAlert, hideAlert } = trainingDayModalSlice.actions;

export default trainingDayModalSlice.reducer;