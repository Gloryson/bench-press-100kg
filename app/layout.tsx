import './globals.scss';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Bench press 100kg',
  description: 'How to get 100kg bench press',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
