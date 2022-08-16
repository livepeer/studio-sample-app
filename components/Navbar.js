import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Navbar.module.css";
import logo from "../public/studioLogo.png"

export default function Navbar() {
  return (
    <main className={styles.main}>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns=""
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Image
                  className="block lg:hidden h-8 w-auto"
                  src={logo}
                  alt="Workflow"
                  width="50"
                  height="50"
                />
              </div>
              <div className="hidden sm:block sm:ml-6 mt-4">
                <div className="flex space-x-4">
                  <Link className={styles.active} href="/">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      🏠 Home
                    </a>
                  </Link>

                  {/* <Link className={styles.active} href="/livestream">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      📡 Livestream
                    </a>
                  </Link> */}

                  <Link className={styles.active} href="/onDemand">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      📼 OnDemand
                    </a>
                  </Link>

                  {/* <Link className={styles.active} href="/mint">
                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      🖼 Mint NFT
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              

              <div className="ml-3 relative">
                {/* <div>
                  <button
                    type="button"
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={logo}
                      alt=""
                      width="50"
                      height="50"
                    />
                  </button>
                </div> */}

                {/* <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link className={styles.active} href="/">
              <a
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                🏠 Home
              </a>
            </Link>

            {/* <Link className={styles.active} href="/livestream">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                📡 Livestream
              </a>
            </Link> */}

            <Link className={styles.active} href="/">
              <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                📼 OnDemand
              </a>
            </Link>

            {/* <Link className={styles.active} href="/mint">
              <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                🖼 Mint NFT
              </a>
            </Link> */}
          </div>
        </div>
      </nav>
    </main>
  );
}