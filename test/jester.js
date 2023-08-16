const { MongoMemoryServer } = require("mongodb-memory-server")

class Jester {
    #mongod
    constructor(){
        this.setup()
    }

    setup() {
        console.log('SETUP called')
        this.#mongod = MongoMemoryServer.create()
    }

    getMongo = () => {
        console.log(`get called ${this.#mongod}`)
        return this.#mongod
    }
}

module.exports = {
    Jester
}