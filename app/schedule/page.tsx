'use client'

import { Week } from '@/components';
import { trainingProgram } from '@/database/training';
import { useAppSelector } from '@/store/store';
import { useId } from 'react';



export default function Schedule () {

  const { initialWeek } = useAppSelector(state => state.user);

  return(
    <section 
      style={{
        display: `grid`,
        minHeight: `100dvh`,
        padding: `15px 0 30px 0`,
        backgroundColor: `var(--main-dark-color)`
      }}
    >
      {
        trainingProgram.slice(initialWeek).map((week, index) => {
          return(
            <Week weekNumber={index} key={useId()} />
          )
        })
      }
    </section>
  )
}