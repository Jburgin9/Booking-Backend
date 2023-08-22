import { MongoDataSource } from 'apollo-datasource-mongodb'
import SairDB from './SairDB.mjs'

const db = new SairDB()
export default class MongoSource extends MongoDataSource {
    getUser(userId) {
      return this.findOneById(userId)
    }
    createUser(){
        db.connect().then(()=> {
            db.createUser('justin')
        })
    }
  }