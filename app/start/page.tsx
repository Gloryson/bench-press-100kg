'use client'

import './Start.scss';



export default function Start () {
  return(
    <section className={'start__page'}>
      <p>
        Hello World. I have been doing fitness for 20 years, of which 7 years I have been a fitness trainer. I've noticed that all the guys want to bench press 100kg and that's a realistic goal for anyone. I can help you do it. You need less than 20 weeks for that. But my program is not for everyone:<br/><br/>
        1. You must know the technique of doing the exercise.<br/>
        2. You must be healthy.<br/>
        3. The program is not suitable for girls.<br/><br/>
        If it suits you, then answer the question - what kind of bench press do you already have?<br/><br/>
      </p>
      <h3>Explanation: 40x10 - means - 40 kg you can do 10 reps<br/><br/></h3>
      <div className={''}>40x10 or 35x12 or 45x8 or 50x6</div>
      <div className={''}>50x8 or 40x12 or 45x10 or 60x5</div>
      <div className={''}>60x7 or 50x10 or 55x9 or 65x7</div>
      <div className={''}>70x6 or 60x9 or 65x8 or 75x5</div>
      <div className={''}>80x5 or 70x8 or 75x7 or 85x4</div>
    </section>
  )
}