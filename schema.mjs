import gql from 'graphql-tag'

const typeDefs = gql`
"A service is what is offered by creators on the platform"
type Service {
  name: String
  details: String
  price: Float
}

# type User {
#   name: String
#   password: String
# }

# type Creator {
#   name: String
#   password: String
#   availability: String
#   services: [Service]
# }

# type Category {
#   name: String,
#   services: [Service]
# }

type Query {
  categoriesForHome: String
}

type Mutation {
  createUser: String
}
`
export default typeDefs