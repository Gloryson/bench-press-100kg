import { trainingProgram } from '@/database/training';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Workout {
  exercises: string[];
}


const initialState: Workout = {
  exercises: trainingProgram[0][0],
}


export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    
    setWorkoutExercices (state, action: PayloadAction<string[]>) {
      state.exercises = action.payload;
    }

  },
})


export const { setWorkoutExercices } = workoutSlice.actions;

export default workoutSlice.reducer;