'use client'

import { useState } from 'react';
import './Exercise.scss';



export function Exercise ( { text }: { text: string} ) {

  const [completed, setCompleted] = useState(false);

  return(
    <div
      className={completed ? 'exercise__completed' : 'exercise'}
      onClick={() => setCompleted(!completed)}
    >
      {text}
    </div>
  )
}