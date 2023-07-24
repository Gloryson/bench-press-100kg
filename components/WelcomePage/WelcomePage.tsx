'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './WelcomePage.scss';


export function WelcomePage () {

  const [leaving, setLeaving] = useState<string>('');
  const router = useRouter();


  return(
    <section className={'welcome__page  ' + leaving}>

      <h1>THIS APP WILL HELP YOU GET 100KG BENCH PRESS</h1>

      <button 
        onClick={() => {
          router.push('/start');
          setLeaving('disappearance');
        }}>
          Get started
        </button>

      <button 
        onClick={() => {
          router.push('/schedule');
          setLeaving('disappearance');
        }}>
          Continue
        </button>

      <div className={'welcome__page__fake__loader'}>Loading<span>.</span><span>.</span><span>.</span></div>
    </section>
  )
}