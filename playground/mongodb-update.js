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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a4314e81f170d254bbd7b1f')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new Object('5a4317ef993c942566ca698e')
  }, {
    $set: {
      name: 'Sur'
    },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  client.close();
});
