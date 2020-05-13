import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {useState} from "react";

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCreateAccount = () => {
    const [createAccount, { loading, error, data }] = useMutation(mutationCreateAccount);
    const [account, setAccount] = useState({
        name: '',
        username: '',
        password: ''
    })

    const changeValues = (e) => {
        e.persist();
        setAccount((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }
    const onSave = async () => {
        await createAccount({
            variables: {
                input: account
            }
        })
        setAccount({
            name: '',
            username: '',
            password: ''
        })
    }

    return { changeValues, onSave, loading, error, data, account }
}