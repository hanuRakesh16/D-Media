import { fetcher } from "../../auth-fetcher";
import { RefreshMutation, RefreshMutationVariables, RefreshDocument } from "../../generated";
import { readAccessToken, setAccessToken } from "./helper";

export default async function refreshAccessToken() {

    const currentRefreshToken = readAccessToken()?.refreshToken; 
    if(!currentRefreshToken) return null;

    const result = await fetcher<RefreshMutation, RefreshMutationVariables>(
        RefreshDocument,
        {
            request: {
                refreshToken: currentRefreshToken,
            },
        }
    )();

    const { refreshToken: newRefreshToken, accessToken } = result.refresh;
    
    setAccessToken(accessToken, newRefreshToken);

    return accessToken as string;

}