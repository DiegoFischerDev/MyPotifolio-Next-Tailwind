import NavBar from '@/components/NavBar'
import MyFooter from '@/components/MyFooter'
import './globals.css'
import { Montserrat } from "next/font/google"
import { DarkThemeContextProvider } from '@/context/DarkThemeContext'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export const metadata = {
  title: {
    default: 'Diego Fischer',
    template: '%s | Diego Fischer'
  },
  description: 'Diego Fischer portfolio web site made in NEXT 13',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark dark:text-light`}>
        <DarkThemeContextProvider>
          <NavBar />
          {children}
          <MyFooter />
        </DarkThemeContextProvider>
      </body>
    </html >
  )
}
