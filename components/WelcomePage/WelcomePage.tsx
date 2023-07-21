'use client'

import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import './WelcomePage.scss';


export function WelcomePage () {

  const router: AppRouterInstance = useRouter();


  return(
    <section className={'welcome__page'}>
      <h1>THIS APP WILL HELP YOU GET 100KG BENCH PRESS</h1>
      <button onClick={() => router.push('/start')}>Get started</button>
      <button onClick={() => router.push('/continue')}>Continue</button>
    </section>
  )
}