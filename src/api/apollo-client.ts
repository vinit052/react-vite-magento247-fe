import { ApolloClient, HttpLink, InMemoryCache, } from "@apollo/client";
import { setContext } from "@apollo/client/link/context"




const authLink = setContext((_, { headers }) => {
    //const { token } = useTokenContext();
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : (localStorage.getItem('token') ? `bearer ${localStorage.getItem('token')}` : "")
        }

    }
})

const httplink = new HttpLink({
    uri: 'https://magento.test/graphql'
})

const client = new ApolloClient({
    link: authLink.concat(httplink),
    cache: new InMemoryCache()
})

export default client