import './globals.css'
import { oxygen } from './fonts'


export const metadata = {
  title: 'Adrian',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${oxygen.variable}`}>
      <body>{children}</body>
      
    </html>
  )
}
