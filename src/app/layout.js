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
      <head>
        {/* <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
