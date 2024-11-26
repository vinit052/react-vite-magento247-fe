import { ApolloClient, InMemoryCache, } from "@apollo/client";
// creat client to fetch the data
const client = new ApolloClient({
    uri: 'https://magento.test/graphql',
    cache: new InMemoryCache(),
    headers: {}

})

export default client