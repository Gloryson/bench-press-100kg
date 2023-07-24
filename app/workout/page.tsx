'use client'

import { useAppDispatch, useAppSelector } from '@/store/store';
import { Exercise } from '@/components';
import { useRouter } from 'next/navigation';
import { setCurrTrainingDay } from '@/store/userSlice';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import './Workout.scss';


export default function Workout () {

  useLocalStorage();
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  


  return(
    <section className={'workout__page'}>
      
      {
        user.exercises?.map((item, index) => {
          return(
            <Exercise text={item} key={index + new Date().toISOString()} />
          )
        })
      }

      <button onClick={() => {
        dispatch(setCurrTrainingDay(user.currTrainingDay + 1));
        router.push('/schedule');
      }}
      >Finish</button>

    </section>
  )
}