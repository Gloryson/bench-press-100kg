'use client'

import { useAppDispatch, useAppSelector } from '@/store/store';
import { Exercise } from '@/components';
import { useId } from 'react';
import { useRouter } from 'next/navigation';
import { setCurrTrainingDay, setCurrTrainingWeek } from '@/store/userSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import './Workout.scss';


export default function Workout () {

  useLocalStorage();
  const { currTrainingWeek, currTrainingDay, exercises } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = useId();

  
  function handleButton (): void {
    if (currTrainingDay + 1 > 2) {
      dispatch(setCurrTrainingWeek(currTrainingWeek + 1));
    }
    dispatch(setCurrTrainingDay((currTrainingDay + 1) % 3));
    router.push('/schedule');
  }


  return(
    <section className={'workout__page'}>
      {
        exercises.map(item => {
          return(
            <Exercise text={item} key={id} />
          )
        })
      }
      <button onClick={handleButton}>Finish</button>
    </section>
  )
}