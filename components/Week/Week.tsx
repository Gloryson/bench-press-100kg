import { TrainingDay } from '@/components';
import { Dispatch, SetStateAction } from 'react';
import './Week.scss';


interface WeekProps {
  week: number;
  setLeaving: Dispatch<SetStateAction<string>>;
}


export function Week ( { week, setLeaving } : WeekProps ) {
  return(
    <div className={'week'}>

      <h3>{`${week + 1} week`}</h3>

      <div className={'days__container'}>
        <TrainingDay 
          week={week} 
          day={0}
          setLeaving={setLeaving}
        />
        <div className={'day'}></div>
        <TrainingDay 
          week={week} 
          day={1}
          setLeaving={setLeaving}
        />
        <div className={'day'}></div>
        <TrainingDay 
          week={week} 
          day={2}
          setLeaving={setLeaving}
        />
        <div className={'day'}></div>
        <div className={'day'}></div>
      </div>

    </div>
  )
}