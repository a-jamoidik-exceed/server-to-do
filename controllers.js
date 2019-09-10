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
    res.send(todos);
  });
};

exports.delete_todo = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.todo }, (err, todos) => {
    if (err) return console.log(err);
    Todo.find({}, (err, todos) => {
      res.send(todos);
    });
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
  console.log(req.body);
  Todo.findOneAndUpdate(
    { _id: req.params.todo },
    { $set: req.body },
    (err, todos) => {
      if (err) return console.log(err);
      Todo.find({}, (err, todos) => {
        res.send(todos);
      });
    }
  );
};

exports.all_completed = (req, res) => {
  console.log("completed", req.body);
  Todo.updateMany({}, { $set: { done: req.body.done } }, (err, todos) => {
    if (err) return console.log(err);
    Todo.find({}, (err, todos) => {
      res.send(todos);
    });
  });
};
