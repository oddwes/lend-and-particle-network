'use client';

import Header from '@/components/header';
import { useAccount } from '@particle-network/connectkit';
import { isEVMChain } from '@particle-network/connectkit/chains';
import styles from './index.module.css';

export default function Index() {
  const { isConnected, chain } = useAccount();

  return (
    <>
      <Header />
      <main className={styles['main-content']}>
        {isConnected && chain && isEVMChain(chain) && (
          <></>
        )}
      </main>
    </>
  );
}
