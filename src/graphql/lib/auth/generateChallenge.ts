import { fetcher } from "../../auth-fetcher";
import { ChallengeDocument, ChallengeQuery, ChallengeQueryVariables } from "../../generated";

export default async function generateChallenge(address:string) {
    return await fetcher<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, {
        request: {
            address,
        }
    })();
}