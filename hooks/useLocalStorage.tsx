'use client'

import { setUser } from '@/store/userSlice';
import { useAppDispatch } from '@/store/store';
import { useEffect } from 'react';


interface User {
  initialWeek: number;
  currTrainingDay: number;
  currTrainingWeek: number;
  exercises: string[];
}


function isUserType (obj: unknown): obj is User {
  return !obj ? false : (
    typeof obj === 'object' &&
    'initialWeek' in obj &&
    'currTrainingDay' in obj &&
    'currTrainingWeek' in obj &&
    'exercises' in obj
  );
}



export function useLocalStorage () {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const storage = localStorage.getItem('bench-press-100kg-program');
    if (storage) {
      const data: User = JSON.parse(storage);
      if (isUserType(data)) dispatch(setUser(data));
      console.log(data.exercises)
    }
  }, [])

}