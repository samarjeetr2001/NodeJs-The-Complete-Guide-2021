const mongoDb = require('mongodb');

const getDb = require('../util/database').getDb;

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this)
      .then(user => {
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(userId) {
    const db = getDb();
    return db.collection('users').findOne({ _id: new mongoDb.ObjectId(userId) })
      .then(user => {
        return user;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

module.exports = User;
