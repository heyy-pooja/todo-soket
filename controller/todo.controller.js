const asyncHandler = require("express-async-handler")

exports.createTodos = asyncHandler(async (req, res) => {
    res.json({ message: "create Todo Success" })
})
exports.readTodos = asyncHandler(async (req, res) => {
    res.json({ message: "read Todo Success" })
})
exports.updateTodos = asyncHandler(async (req, res) => {
    res.json({ message: "update Todo Success" })
})
exports.deleteTodos = asyncHandler(async (req, res) => {
    res.json({ message: "delete Todo Success" })
})