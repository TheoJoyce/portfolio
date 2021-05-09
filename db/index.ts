import { GraphQLClient } from 'graphql-request'

const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
    headers: {
        authorization: 'Bearer ' + 'fnAEIzzAZlACBNuONWS6d3KsUy-HAdvclhAOiWJt',
    },
})

export default graphQLClient
