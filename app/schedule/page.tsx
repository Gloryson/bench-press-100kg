'use client'

import { Week } from '@/components';
import { trainingProgram } from '@/database/trainingProgram';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useAppSelector } from '@/store/store';
import { useState } from 'react';



export default function Schedule () {

  useLocalStorage();
  const [leaving, setLeaving] = useState<string>('');
  const { initialWeek } = useAppSelector(state => state.user);
  

  return(
    <section
      className={'appearance  ' + leaving}
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
            <Week week={index} key={index + new Date().toISOString()} setLeaving={setLeaving}/>
          )
        })
      }
    </section>
  )
}