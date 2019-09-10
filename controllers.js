const Todo = require("./models");

exports.create_todo = (req, res) => {
  let newTodo = new Todo({
    done: req.body.done,
    content: req.body.content
  });
  newTodo.save((err, todo) => {
    if (err) {
      return console.log(err);
    }
    Todo.find({}, (err, todos) => {
      res.send(todos);
    });
  });
};

exports.get_todos = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) return console.log(err);
    res.send(todos);
  });
};

exports.delete_todo = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.todo }, (err, todos) => {
    if (err) return console.log(err);
    res.send(todos);
  });
};

exports.delete_completed_todo = (req, res) => {
  Todo.deleteMany({ done: true }, (err, todos) => {
    if (err) return console.log(err);
    Todo.find({}, (err, todos) => {
      res.send(todos);
    });
  });
};

exports.update_todo = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todo },
    { $set: { done: req.body.done, content: req.body.content } },
    { new: true, fields: { "_id": String, "done": Boolean,  "content": String } },
    (err, todo) => {
      if (err) return console.log(err);
      res.send(todo);
    }
  );
};

exports.all_completed = (req, res) => {
  Todo.updateMany({}, { $set: { done: req.body.done } }, (err, todos) => {
    if (err) return console.log(err);
    Todo.find({}, (err, todos) => {
      res.send(todos);
    });
  });
};
