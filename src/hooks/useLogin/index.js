import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {useEffect, useState} from "react";

const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useLogin = () => {
    const [setUser, { loading, error, data }] = useMutation(mutationLogin);
    const [account, setAccount] = useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        console.log(data)
        data && localStorage.setItem('token', data.logIn.token)
    }, [data])

    const changeData = (e) => {
        e.persist();
        setAccount((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }

    const handleSubmit = () => {
        const { username, password } = account;
        setUser({
            variables: {
                username,
                password
            }
        })
    }
    return { changeData, handleSubmit, loading, error, name: data?.logIn.customer.name, account }
}