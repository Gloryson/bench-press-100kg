'use client'

import './Week.scss';


export function Week ( { weekNumber } : { weekNumber: number } ) {
  return(
    <div className={'week'}>
      <h3>{`${weekNumber} week`}</h3>
      <div className={'days__container'}>
        <div className={'training__day'}></div>
        <div></div>
        <div className={'training__day'}></div>
        <div></div>
        <div className={'training__day'}></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}