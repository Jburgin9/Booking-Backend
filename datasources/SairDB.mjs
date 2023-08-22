import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default class SairDB {
    connection
    db

    constructor(){
    }

    async connect(){
        console.log('connect called')
        try {
            db = await client.db('sair').createCollection('category')
            connection = await client.connect()
            return "success"
            
        } catch(e) {
            return `failure: ${e}`
        }
    }

    async insertOne(category){
        console.log('insertOne Called')
        const result = await db.insertOne(category)
        return result
    }

    tearDown(){
        connection.close()
    }
}