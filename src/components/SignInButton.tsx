import {
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ConnectWallet,
  ChainId,
  MediaRenderer,
} from "@thirdweb-dev/react";
import React from "react";
import useLensUser from "../graphql/lib/auth/useLensUser";
import useLogin from "../graphql/lib/auth/userLogin";

type Props = {};

export default function SignInButton({}: Props) {
  const address = useAddress(); // Detct connection address
  const isOnWrongNetwork = useNetworkMismatch(); // detect if network mismatch
  const [, switchNetwork] = useNetwork(); // switch network
  const { isSignedInQuery, profileQuery } = useLensUser();
  const { mutate: requestLogin } = useLogin();

  // 1. user needs to connect to wallet
  if (!address) {
    return <ConnectWallet />;
  }
  // 2. Switch Network
  if (isOnWrongNetwork) {
    return (
      <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
        Switch Network
      </button>
    );
  }
  if (isSignedInQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (!isSignedInQuery.data) {
    return <button onClick={() => requestLogin()}>Sign In with Lens</button>;
  }
  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (!profileQuery.data?.defaultProfile) {
    return <div>No Lens Profile.</div>;
  }
  // If it's done loading and there's a default profile
  if (profileQuery.data?.defaultProfile) {
    return (
      <div>
        <MediaRenderer
          // @ts-ignore
          src={profileQuery?.data?.defaultProfile?.picture?.original?.url || ""}
          alt={profileQuery.data.defaultProfile.name || ""}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
          }}
        />
      </div>
    );
  }
  return <div>Something went Wrong.</div>;
}
