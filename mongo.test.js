const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');
const { Jester } = require('./jester');

describe('mongo operations', () => {
    let connection;
    let db;
    const jester = new Jester()
    let mongod 

    beforeAll(async () => {
        // console.log(jester.getMongo().then((res) => {res}))
        // const uri = mongod.getUri();
        connection = await new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true })
        db = await connection.db("JESTER");
    });

    it('should insert a doc into collection', async () => {
        console.log(`test: ${connection}`)
        const testingCollection = db.collection('testing');

        const mockUser = { _id: '1', name: 'John' };
        await testingCollection.insertOne(mockUser);

        const insertedUser = await testingCollection.findOne({ _id: '1' });
        expect(insertedUser).toEqual(mockUser);
    });

    it('should retrieve specific users', async() => {
        //search for user by id
        const testingCollection = db.collection('testing');
        const mockUser = { _id: '1', name: 'John' };
        const searchUser = await testingCollection.findOne({ _id: '1' });
        expect(searchUser).toEqual(mockUser)

    })

    it('should retrieve all users', async() => {
        //check for user count and retrieve users. if user list match the count of records in the collection the test should pass
        const testingCollection = db.collection('testing');
        const collectionCount = await testingCollection.count()
        console.log(`ALL: ${collectionCount}`)
        expect(collectionCount).toEqual(1)
    })

    afterAll(async () => {
        // await mongod.stop()
        await connection.close();
    });
});

