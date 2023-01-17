import { useAddress, useNetworkMismatch, useNetwork, ConnectWallet, ChainId } from '@thirdweb-dev/react';
import React from 'react';

type Props = {}

const SignInButton = (props: Props) => {
    const address = useAddress();   // Detct connection address
    const isOnWrongNetwork = useNetworkMismatch();  // detect if network mismatch
    const [, switchNetwork] = useNetwork();     // switch network

    // 1. user needs to connect to wallet
    if(!address) {
        return <ConnectWallet />;
    }
    // 2. Switch Network
    if(isOnWrongNetwork) {
        return (
            <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
                Switch Network
            </button>
        );
    }
}