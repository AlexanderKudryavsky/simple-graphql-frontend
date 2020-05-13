import { useLazyQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const queryPetById = loader('./gql/queryPetById.graphql')

export const usePetById = () => {
    const [getPet, { loading, error, data }] = useLazyQuery(queryPetById)

    return {getPet, loading, error, pet: data?.petById }
}