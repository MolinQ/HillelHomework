const express = require('express');
const mongoose = require('mongoose/index');
const Todo = require('../mongo/todo.model');
const cors = require('cors');
const app = express();
const url = `mongodb+srv://kraskiril2801:cD2FpMLJrbsu82D6@todos.qr3n7.mongodb.net/?retryWrites=true&w=majority&appName=TodoS`;

mongoose.connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/todos', async (req, res) => {
    try {
        const todo = new Todo({
            text: req.body.text
        });
        const savedTodo = await todo.save();
        res.status(201).send(savedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.send(todos);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
        if (!updatedTodo) return res.status(404).send('Todo not found');
        res.send(updatedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) return res.status(404).send('Todo not found');
        res.send(deletedTodo);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});