import { Popcorn } from "lucide-react"
import Link from "next/link"


const Navbar = () =>
{
  return (
    <nav className="flex items-center h-14 px-4 border-b gap-4 md:gap-6">
      <Link className="flex items-center gap-2 text-2xl font-semibold" href="#">
        <Popcorn className="h-6 w-6" />
        <span>Stream Flow</span>
      </Link>
      <div className="ml-auto flex gap-4">
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-900/90 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-950 dark:hover:bg-gray-50/90 dark:hover:text-gray-950 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Log in
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Sign up
        </Link>
      </div>
    </nav>
  )
}

export default Navbar