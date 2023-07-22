'use client'

import { useAppSelector } from '@/store/store';
import { Exercise } from '@/components';
import './Workout.scss';


export default function Workout () {

  const { exercises } = useAppSelector(state => state.workout);


  return(
    <section className={'workout__page'}>
      {
        exercises.map(item => <Exercise text={item} />)
      }
      <button>Finish</button>
    </section>
  )
}