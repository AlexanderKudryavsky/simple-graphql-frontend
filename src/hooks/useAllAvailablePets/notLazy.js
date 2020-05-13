import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryAllAvailablePets = loader('./gql/queryAllAvailablePets.graphql')

export const useNotLazyAllAvailablePets = () => {
    const { loading, error, data } = useQuery(queryAllAvailablePets, {
        pollInterval: 5000
    });
    return { availablePetsLoading: loading, availablePetsError: error, availablePets: data?.allAvailablePets }
}