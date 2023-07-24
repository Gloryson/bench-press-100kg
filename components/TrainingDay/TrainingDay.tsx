'use client'

import { useAppSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import './TrainingDay.scss';


interface TrainingDayProps {
  week: number;
  day: number;
  setLeaving: Dispatch<SetStateAction<string>>;
}


export function TrainingDay ( { week, day, setLeaving } : TrainingDayProps ) {

  const { currTrainingWeek, currTrainingDay } = useAppSelector(state => state.user);
  const router = useRouter();

  
  return week === currTrainingWeek && day === currTrainingDay ? (
    <div
      className={'current__training__day'}
      onClick={() => {
        router.push('/workout');
        setLeaving('disappearance');
      }}
    ></div>
  ) : (
    <div className={'training__day'}></div>
  )
}