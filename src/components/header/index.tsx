import logo from '@/assets/images/logo.png';
import { ConnectButton } from '@particle-network/connectkit';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';
import NavElement from '../nav-element';

export default function Header() {
  const navElement = (text) => {
    return (
      <div className="flex flex-row items-center gap-3">
        <div className="px-5 py-1 text-[16px] font-semibold leading-[24px] text-left text-white">
          {" "}
          {text}{" "}
        </div>
      </div>
    )
  }

  return (
    <div className="navbar flex h-20 flex-row md:mb-2 bg-black text-neutral-content drop-shadow-md">
      <div>
        <div className="sm:inline w-22 h-22 md:max-w-22">
          <div className="lg:mr-12 lg:pl-2 mr-0 ml-4">
            <Image
              src="/shrub-logo.svg"
              alt="Shrub Logo"
              width="140"
              height="20"
            />
          </div>
        </div>
        <div className="navbar-start">
          <div className="hidden md:inline-flex align-items-center justify-items">
            <Link href='/dashboard'>
              {navElement('Dashboard')}
            </Link>
            <Link href='/borrow'>
              {navElement('Borrow')}
            </Link>
          </div>
        </div>
        <div className={styles['nav-end']}>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
