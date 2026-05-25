import type { Metadata } from 'next'
import { Anton, Fraunces, Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const anton = Anton({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
})

const fraunces = Fraunces({
  variable: '--font-editorial',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
  variable: '--font-stat',
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tapeball Pros Cricket Club — Saint John, NB',
  description:
    "Saint John's inclusive tapeball cricket community. Join us for weekly matches, tournaments, and community in New Brunswick.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${fraunces.variable} ${poppins.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-pitch-900 text-chalk-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
