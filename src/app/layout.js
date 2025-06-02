import "@/app/globals.css"
import Header from "@/components/common/Header"
import Menu from "@/components/common/Menu"

export const metadata = {
  title: "Wordiary",
  description: "Keep track of your newly-learned words.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-800 dark:text-white text-center">
        <Header />
        <div className="p-4 max-w-md mx-auto">
          {children}
        </div>
        <div style={{height: '64px'}}></div>
        <Menu />
      </body>
    </html>
  )
}
