import { TrainingDay } from '@/components';
import './Week.scss';


export function Week ( { week } : { week: number } ) {
  return(
    <div className={'week'}>

      <h3>{`${week + 1} week`}</h3>

      <div className={'days__container'}>
        <TrainingDay 
          week={week} 
          day={0}
        />
        <div className={'day'}></div>
        <TrainingDay 
          week={week} 
          day={1}
        />
        <div className={'day'}></div>
        <TrainingDay 
          week={week} 
          day={2}
        />
        <div className={'day'}></div>
        <div className={'day'}></div>
      </div>

    </div>
  )
}