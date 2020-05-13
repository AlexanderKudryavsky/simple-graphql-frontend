import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllCheckedOutPets = loader('./gql/queryAllCheckedOutPets.graphql')

export const useAllCheckedOutPets = () => {
    const { data, loading, error } = useQuery(queryAllCheckedOutPets, {
        pollInterval: 5000
    });

    return { queryAllCheckedOutPets: data?.allCheckedOutPets, loading, error }
}