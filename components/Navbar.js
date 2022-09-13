import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Navbar.module.css";
import logo from "../public/studioLogo.png"

export default function Navbar() {
  return (
    <nav className='bg-blue-700'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>

              <svg
                className='block h-6 w-6'
                xmlns=''
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
              </svg>

              <svg
                className='hidden h-6 w-6'
                xmlns=''
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Image
                className='block lg:hidden h-8 w-auto'
                src={logo}
                alt='Workflow'
                width='50'
                height='50'
              />
            </div>
            <div className='hidden sm:block sm:ml-6 mt-4'>
              <div className='flex space-x-4'>
                <Link className={styles.active} href='/'>
                  <a className='text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
                    🏠 Home
                  </a>
                </Link>

                <Link className={styles.active} href='/livestream'>
                  <a className='text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
                    📡 Livestream
                  </a>
                </Link>

                <Link className={styles.active} href='/livestreamSDK'>
                  <a className='text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
                    📹 LivestreamSDK
                  </a>
                </Link>

                <Link className={styles.active} href='/onDemand'>
                  <a className='text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
                    📼 OnDemand
                  </a>
                </Link>

                <Link className={styles.active} href='/onDemandSDK'>
                  <a className='text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
                    🧰 OnDemand SDK
                  </a>
                </Link>

                {/* <Link className={styles.active} href="/mint">
                    <a className="text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                      🖼 Mint NFT
                    </a>
                  </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link className={styles.active} href='/'>
            <a
              className='bg-blue-800 text-white block px-3 py-2 rounded-md text-base font-medium'
              aria-current='page'
            >
              🏠 Home
            </a>
          </Link>

          <Link className={styles.active} href='/livestream'>
            <a className='bg-blue-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
              📡 Livestream
            </a>
          </Link>

          <Link className={styles.active} href='/livestreamSDK'>
            <a className='text-gray-200 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium'>
              📹 LivestreamSDK
            </a>
          </Link>

          <Link className={styles.active} href='/onDemand'>
            <a className='bg-blue-800 text-white block px-3 py-2 rounded-md text-base font-medium'>
              📼 OnDemand
            </a>
          </Link>

          <Link className={styles.active} href='/onDemandSDK'>
            <a className='bg-blue-800 text-white block px-3 py-2 rounded-md text-base font-medium'>
              🧰 OnDemand
            </a>
          </Link>

          {/* <Link className={styles.active} href="/mint">
              <a className="bg-blue-800 text-white block px-3 py-2 rounded-md text-base font-medium">
                🖼 Mint NFT
              </a>
            </Link> */}
        </div>
      </div>
    </nav>
  );
}