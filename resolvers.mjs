const resolvers = {
    Query: {
        categoriesForHome: (parent, args, {dataSources}, info) => {
            return dataSources.MongoSource.getUser('')
        }
    },
    Mutation: {
        createUser: (_, __, {dataSources}) => {
            try {
                dataSources.MongoSource.createUser()
                return "create user called"
            } catch(e){

            }
        }
    }
}
export default resolvers