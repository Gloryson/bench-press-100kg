import { User } from '@/Types/interfaces';
import { trainingProgram } from '@/database/trainingProgram';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: User = {
  initialWeek: 0,
  currTrainingDay: 0,
  currTrainingWeek: 0,
  exercises: null,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUser (state, action: PayloadAction<User>) {
      state.initialWeek = action.payload.initialWeek;
      state.currTrainingDay = action.payload.currTrainingDay;
      state.currTrainingWeek = action.payload.currTrainingWeek;
      state.exercises = trainingProgram[state.initialWeek + state.currTrainingWeek][state.currTrainingDay];
    },

    setInitialWeek (state, action: PayloadAction<number>) {
      state.initialWeek = action.payload;
      state.currTrainingDay = 0;
      state.currTrainingWeek = 0;
      state.exercises = trainingProgram[state.initialWeek][0];
    },

    setCurrTrainingDay (state, action: PayloadAction<number>) {
      if (action.payload > 2) {
        state.currTrainingWeek += 1;
        state.currTrainingDay = 0;
      } else {
        state.currTrainingDay = action.payload;
      }
      state.exercises = trainingProgram[state.initialWeek + state.currTrainingWeek][state.currTrainingDay];
    }

  },
})


export const { setUser, setInitialWeek, setCurrTrainingDay } = userSlice.actions;

export default userSlice.reducer;