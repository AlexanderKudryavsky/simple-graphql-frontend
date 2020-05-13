import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllPets = loader('./gql/queryAllPets.graphql')

export const useQueryAllPets = () => {
    const { loading, error, data } = useQuery(queryAllPets);

    return { loading, error, pets: data?.allPets }
}