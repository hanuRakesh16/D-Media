import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useAuthenticateMutation } from "../../generated";
import generateChallenge from "./generateChallenge";

export default function useLogin() {
    const address = useAddress();   

    const sdk = useSDK();
    const { mutateAsync: sendSignedMessage } = useAuthenticateMutation();

    async function login() {
        if(!address) return;
        // generate challenge comes from lens api
        const { challenge } = await generateChallenge(address);
        // sign with user wallet
        const signature = await sdk?.wallet.sign(challenge.text);
        // send to lens api
        const { authenticate } = await sendSignedMessage({
            request: {
                address: address,
                signature: signature
            },
        });
        console.log("Authenticated:" + authenticate);
        // 
    }
    return useMutation(login);
    
}