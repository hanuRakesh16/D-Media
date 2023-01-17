import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { PublicationSortCriteria, useExplorePublicationsQuery } from "../graphql/generated";
import useLogin from "../graphql/lib/auth/userLogin";
import styles from "../styles/Home.module.css";

export default function Home() {
    // const { data, isLoading, error } = useExplorePublicationsQuery ({
    //     request: {
    //         sortCriteria: PublicationSortCriteria.TopMirrored,
    //     },
    // });
    // console.log({
    //     data,
    //     isLoading,
    //     error,
    // });
    const address = useAddress();
    const { mutate:requestLogin } = useLogin();

    if(!address){
        return <ConnectWallet />;
    }
    return <button onClick={() => requestLogin()}>Login</button>;
}