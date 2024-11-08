'use client';

import Header from '@/components/header';
import { useAccount } from '@particle-network/connectkit';
import { isEVMChain } from '@particle-network/connectkit/chains';
import Borrow from './pages/borrow';

import './index.css';

export default function Index() {
  const { isConnected, chain } = useAccount();

  return (
    <div>
      <Header />
      <div>
        {isConnected && chain && isEVMChain(chain) && (
          <Borrow />
        )}
      </div>/
    </div>
  );
}
