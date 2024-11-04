import logo from '@/assets/images/logo.png';
import { ConnectButton } from '@particle-network/connectkit';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.css';
import NavElement from '../nav-element';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles['nav-start']}>
          <div className={styles['nav-start-slogan']}>particle network</div>
          <Image src={logo} width={36} height={36} alt='logo'></Image>
        </div>
        {/* <div className="navbar-start">
          <div className="hidden md:inline-flex align-items-center justify-items">
            <NavElement
              label="Dashboard"
              href="/dashboard"
            />
            <NavElement
              label="Borrow"
              href="/borrow"
            />
          </div>
        </div> */}
        <Link href='/dashboard'>
          <div className={styles['nav-item']}>Dashboard</div>
        </Link>
        <Link href='/borrow'>
          <div className={styles['nav-item']}>Borrow</div>
        </Link>
      </nav>
    </header>
  );
}
