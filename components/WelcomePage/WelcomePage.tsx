'use client'

import { useRouter } from 'next/navigation';
import './WelcomePage.scss';


export function WelcomePage () {

  const router = useRouter();


  return(
    <section className={'welcome__page'}>
      <h1>THIS APP WILL HELP YOU GET 100KG BENCH PRESS</h1>
      <button onClick={() => router.push('/start')}>Get started</button>
      <button onClick={() => router.push('/training')}>Continue</button>
    </section>
  )
}