const { readTodos, createTodos, updateTodos, deleteTodos } = require("../controller/todo.controller")

const router = require("express").Router()
router
    .get("/", createTodos)
    .post("/add", readTodos)
    .put("/update/:id", updateTodos)
    .delete("/delete/:id", deleteTodos)

module.exports = router