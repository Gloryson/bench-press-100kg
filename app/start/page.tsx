'use client'

import './Start.scss';



export default function Start () {
  return(
    <section className={'start__page'}>
      <p>
        Hello World. I have been doing fitness for 20 years, of which 7 years I have been a fitness trainer. I've noticed that all the guys want to bench press 100kg and I can help do it. This program is not for everyone:<br/><br/>
        1. You must know the technique of doing the exercise.<br/>
        2. You must be healthy.<br/>
        3. The program is not suitable for girls.<br/><br/>
        What bench press do you already have?<br/><br/>
      </p>
      <h3>Explanation: 40x10 - means - 40 kg you can do 10 reps<br/><br/></h3>
      <button>35x12 or 40x10 or 45x8 or 50x6</button>
      <button>40x12 or 45x10 or 50x8 or 55x6</button>
      <button>50x12 or 55x10 or 60x8 or 65x6</button>
      <button>60x12 or 65x10 or 70x8 or 75x6</button>
      <button>70x12 or 75x10 or 80x8 or 85x6</button>
    </section>
  )
}