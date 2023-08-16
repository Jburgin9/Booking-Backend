const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

class SairDB {
    connection
    db

    constructor(){}

    async connect(){
        console.log('connect called')
        try {
            connection = await client.connect()
            return "success"
            
        } catch(e) {
            return `failure: ${e}`
        }
    }

    async insertOne(){
        console.log('insertOne Called')
    }

    tearDown(){
        connection.close()
    }
}

module.exports = SairDB