const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

describe('insert', () => {
    let connection;
    let db;


    beforeAll(async () => {

        // This will create an new instance of "MongoMemoryServer" and automatically start it
        const mongod = await MongoMemoryServer.create()

        const uri = mongod.getUri();
        connection = await new MongoClient(uri, { useNewUrlParser: true })
        db = await connection.db("JESTER");
        return mongod
    });

    it('should insert a doc into collection', async () => {
        console.log(`test: ${connection}`)
        const users = db.collection('testing');

        const mockUser = { _id: '2', name: 'John' };
        await users.insertOne(mockUser);

        const insertedUser = await users.findOne({ _id: '2' });
        expect(insertedUser).toEqual(mockUser);
    });

    afterAll(async () => {
        await connection.close();
    });
});
