import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './Footer'
import Header from './Header'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Header/>
      <body >
        {children}
      </body>
      <Footer />
    </html>
  )
}
