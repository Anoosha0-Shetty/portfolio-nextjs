import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Anoosha Shetty',
  description: 'Anoosha Shetty portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        </body>
        <Footer/> 
    </html>
  )
}
