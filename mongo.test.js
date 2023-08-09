const { MongoClient } = require('mongodb');

describe('insert', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true })
        db = await connection.db("JESTER");
    });

    it('should insert a doc into collection', async () => {
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


// test('should post data to the DB', () => {

// })

// test('should get data from DB', () => {

// })

