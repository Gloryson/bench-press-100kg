'use client'

import { useAppSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import './TrainingDay.scss';


export function TrainingDay ( { week, day } : { week: number, day: number }) {

  const { currTrainingWeek, currTrainingDay } = useAppSelector(state => state.user);
  const router = useRouter();

  
  return week === currTrainingWeek && day === currTrainingDay ? (
    <div
      className={'current__training__day'}
      onClick={() => router.push('/workout')}
    ></div>
  ) : (
    <div className={'training__day'}></div>
  )
}