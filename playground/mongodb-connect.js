// Both codes are identical
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Buy milk',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Rahee',
    age: 23,
    location: 'New York'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user',err);
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
