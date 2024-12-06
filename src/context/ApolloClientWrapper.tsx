import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { useAuthContext } from "./AuthContext";

interface Props {
    children: React.ReactNode
}

const httpLink = new HttpLink({
    uri: 'https://magento.test/graphql'
});

const AuthLinkWrapper = ({ children }: Props) => {
    const { token } = useAuthContext();
    console.log('Token on Load Load : ' + token);
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};

export const ApolloClientWrapper = ({ children }: Props) => {
    return (
        <AuthLinkWrapper>
            {children}
        </AuthLinkWrapper>
    );
};
