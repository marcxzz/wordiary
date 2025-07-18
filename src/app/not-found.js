import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col text-center mt-32">
      <h1 className="h1 text-6xl! mb-6!">404</h1>
      <h2 className="h2 text-xl!">Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="button button-outline mt-4 w-fit mx-auto">Go back</Link>
    </div>
  )
}
