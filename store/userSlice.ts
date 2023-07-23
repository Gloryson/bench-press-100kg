import { trainingProgram } from '@/database/training';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  initialWeek: number;
  currTrainingDay: number;
  currTrainingWeek: number;
  exercises: string[];
}


const initialState: User = {
  initialWeek: 0,
  currTrainingDay: 0,
  currTrainingWeek: 0,
  exercises: trainingProgram[0][0],
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setInitialWeek (state, action: PayloadAction<number>) {
      state.initialWeek = action.payload;
    },

    setCurrTrainingDay (state, action: PayloadAction<number>) {
      state.currTrainingDay = action.payload;
    },

    setCurrTrainingWeek (state, action: PayloadAction<number>) {
      state.currTrainingWeek = action.payload;
    },

    setWorkoutExercices (state, action: PayloadAction<string[]>) {
      state.exercises = action.payload;
    }

  },
})


export const { setInitialWeek, setCurrTrainingDay, setCurrTrainingWeek, setWorkoutExercices } = userSlice.actions;

export default userSlice.reducer;