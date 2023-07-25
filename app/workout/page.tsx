'use client'

import { useAppDispatch, useAppSelector } from '@/store/store';
import { Exercise } from '@/components';
import { useRouter } from 'next/navigation';
import { setCurrTrainingDay } from '@/store/userSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useState } from 'react';
import './Workout.scss';


export default function Workout () {

  useLocalStorage();
  const [leaving, setLeaving] = useState<string>('');
  const { currTrainingDay, exercises} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  


  return(
    <section className={'workout__page  appearance  ' + leaving}>
      
      {
        exercises?.map((item, index) => {
          return(
            <Exercise text={item} key={index + new Date().toISOString()} />
          )
        })
      }

      <button onClick={() => {
        setLeaving('disappearance');
        setTimeout(() => {
          dispatch(setCurrTrainingDay(currTrainingDay + 1));
          router.push('/schedule');
        }, 250)
      }}
      >Finish</button>

      <button
        style={{ backgroundColor: `var(--green)` }}
        onClick={() => {
          setLeaving('disappearance');
          router.push('/schedule');
        }}
      >Back</button>

    </section>
  )
}