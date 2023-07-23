'use client'

import { useAppDispatch, useAppSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import { setWorkoutExercices } from '@/store/userSlice';
import { trainingProgram } from '@/database/training';
import './Week.scss';


export function Week ( { weekNumber } : { weekNumber: number } ) {

  const { currTrainingDay, currTrainingWeek, initialWeek } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();


  function setTrainingDayClass (week: number, day: number): string {
    return week === currTrainingWeek && day === currTrainingDay ? 'current__training__day' : 'training__day';
  }


  function handleButton (week: number, day: number): void {
    if (week === currTrainingWeek && day === currTrainingDay) {
      dispatch(setWorkoutExercices(trainingProgram[week + initialWeek][day]));
      router.push('/workout');
    }
  }


  return(
    <div className={'week'}>

      <h3>{`${weekNumber + 1} week`}</h3>

      <div className={'days__container'}>
        <div
          className={'day' + ' ' + setTrainingDayClass(weekNumber, 0)}
          onClick={() => handleButton(weekNumber, 0)}
        ></div>
        <div className={'day'}></div>
        <div
          className={'day' + ' ' + setTrainingDayClass(weekNumber, 1)}
          onClick={() => handleButton(weekNumber, 1)}
        ></div>
        <div className={'day'}></div>
        <div
          className={'day' + ' ' + setTrainingDayClass(weekNumber, 2)}
          onClick={() => handleButton(weekNumber, 2)}
        ></div>
        <div className={'day'}></div>
        <div className={'day'}></div>
      </div>

    </div>
  )
}