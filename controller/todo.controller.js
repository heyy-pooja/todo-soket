const asyncHandler = require("express-async-handler")
const Todo = require("../model/Todo")

exports.createTodos = asyncHandler(async (req, res) => {
    const result = await Todo.findOne()
    res.json({ message: "create Todo Success", result })
})
exports.readTodos = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "read Todo Success" })
})
exports.updateTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.body, req.params.id)
    res.json({ message: "update Todo Success" })
})
exports.deleteTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "delete Todo Success" })
})