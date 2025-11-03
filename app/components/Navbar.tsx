import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/next.svg" // Replace with your logo path
                alt="Logo"
                width={100}
                height={40}
                className="dark:invert"
              />
            </Link>
          </div>

          {/* Navigation links - centered */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/mood-board"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Mood Board
              </Link>
              <Link
                href="/merchandise"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Merchandise
              </Link>
              <Link
                href="/music"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Music
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Listen Now button on the right */}
          <div className="flex-shrink-0">
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Listen Now
            </button>
          </div>

          {/* Mobile menu button (optional) */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-black inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (optional) */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
          <Link
            href="/"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            href="/mood-board"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Mood Board
          </Link>
          <Link
            href="/merchandise"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Merchandise
          </Link>
          <Link
            href="/music"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Music
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}