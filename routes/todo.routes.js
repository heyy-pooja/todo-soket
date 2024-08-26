const { readTodos, createTodos, updateTodos, deleteTodos } = require("../controller/todo.controller")

const router = require("express").Router()
router
    .get("/", readTodos)
    .post("/add", createTodos)
    .put("/update/:id", updateTodos)
    .delete("/delete/:id", deleteTodos)

module.exports = router