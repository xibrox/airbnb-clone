import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

import Navbar from '@/app/components/navbar/Navbar'
import ClientOnly from '@/app/components/ClientOnly'
import RegisterModal from '@/app/components/modals/RegisterModal'
import LoginModal from '@/app/components/modals/LoginModal'
import RentModal from '@/app/components/modals/RentModal'
import SearchModal from '@/app/components/modals/SearchModal'

import ToasterProvider from '@/app/providers/ToasterProvider'
import getCurrentUser from '@/app/actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
