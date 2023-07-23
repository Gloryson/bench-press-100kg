import { trainingProgram } from '@/database/trainingProgram';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface User {
  initialWeek: number;
  currTrainingDay: number;
  currTrainingWeek: number;
  exercises: string[];
}


const initialState: User = {
  initialWeek: 0,
  currTrainingDay: 0,
  currTrainingWeek: 0,
  exercises: [],
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUser (state, action: PayloadAction<User>) {
      state.initialWeek = action.payload.initialWeek;
      state.currTrainingDay = action.payload.currTrainingDay;
      state.currTrainingWeek = action.payload.currTrainingWeek;
      state.exercises = action.payload.exercises;
    },
    
    setInitialWeek (state, action: PayloadAction<number>) {
      state.initialWeek = action.payload;
      state.currTrainingDay = 0;
      state.currTrainingWeek = 0;
      state.exercises = trainingProgram[state.initialWeek][0];
      localStorage.setItem('bench-press-100kg-program', JSON.stringify({ ...state }));
    },

    setCurrTrainingDay (state, action: PayloadAction<number>) {
      state.currTrainingDay = action.payload;
      localStorage.setItem('bench-press-100kg-program', JSON.stringify({ ...state }));
    },

    setCurrTrainingWeek (state, action: PayloadAction<number>) {
      state.currTrainingWeek = action.payload;
      localStorage.setItem('bench-press-100kg-program', JSON.stringify({ ...state }));
    },

    setWorkoutExercices (state, action: PayloadAction<string[]>) {
      state.exercises = action.payload;
      localStorage.setItem('bench-press-100kg-program', JSON.stringify({ ...state }));
    }

  },
})


export const { setInitialWeek, setCurrTrainingDay, setCurrTrainingWeek, setWorkoutExercices, setUser } = userSlice.actions;

export default userSlice.reducer;