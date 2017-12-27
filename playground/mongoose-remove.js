const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then((todo) => {
//   console.log(todo);
// });

// Todo.findByIdAndRemove('5a43e86d88073663e581374d').then((todo) => {
//   console.log(todo);
// });
