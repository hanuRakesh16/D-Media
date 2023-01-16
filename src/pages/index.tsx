
import { PublicationSortCriteria, useExplorePublicationsQuery } from "../graphql/generated";
import styles from "../styles/Home.module.css";

export default function Home() {
    const { data, isLoading, error } = useExplorePublicationsQuery ({
        request: {
            sortCriteria: PublicationSortCriteria.TopMirrored,
        },
    });
    console.log({
        data,
        isLoading,
        error,
    });
    return <>Hello</>;
}