import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {WebSocketLink} from "apollo-link-ws";
import {getMainDefinition} from "apollo-utilities";
import {split} from "apollo-link";

const uri = 'https://funded-pet-library.moonhighway.com/'
const httpLink = createHttpLink({
    uri
})

const wsLink = new WebSocketLink({
    uri: `wss://funded-pet-library.moonhighway.com/`,
    options: {
        reconnect: true
    }
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
});

const link = split(
    // split based on operation type
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    authLink.concat(httpLink)
);

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})