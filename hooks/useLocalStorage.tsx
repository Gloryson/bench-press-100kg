'use client'

import { User } from '@/Types/interfaces';
import { isUserType } from '@/Types/typeGuards';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setUser } from '@/store/userSlice';
import { useEffect } from 'react';



export function useLocalStorage () {

  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user.exercises) {
      const storage = localStorage.getItem('bench-press-100kg-program');
      if (storage) {
        const data: User = JSON.parse(storage);
        if (isUserType(data)) dispatch(setUser({ ...data }));
      }
    } else {
      localStorage.setItem('bench-press-100kg-program', JSON.stringify({ ...user }));
    }
  }, [user])

}