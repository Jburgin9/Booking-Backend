const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

class SairDB {
    constructor(){}

    async connect(){
        console.log('connect called')
        try {
            var connection = await client.connect()
            return "success"
            
        } catch(e) {
            return `failure: ${e}`
        }
    }
}

module.exports = SairDB