import './globals.css'
import type { Metadata } from 'next'
import Providers from './providers'
import { Roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Header from './components/Header/Header'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Matheus Kiyoshi Ferreira',
  description: 'Seja bem-vindo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(roboto.className, 'bg overflow-x-hidden')}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
