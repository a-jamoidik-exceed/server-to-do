const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/todos", controllers.get_todos);
router.delete("/todos/:todo/delete", controllers.delete_todo);
router.delete("/todos/delete-completed", controllers.delete_completed_todo);
router.put("/todos/:todo/update", controllers.update_todo);
router.put("/todos/all-completed", controllers.all_completed);
router.post("/todos/create-todo", controllers.create_todo);

module.exports = router;
