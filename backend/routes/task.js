const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// GET all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new task
router.post('/tasks', async (req, res) => {
    const { title, desc } = req.body;

    const task = new Task({
        title,
        desc
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET tasks with search functionality
router.get('/tasks/search', async (req, res) => {
    const { query } = req.query;

    try {
        const tasks = await Task.find({
            title: { $regex: query, $options: 'i' }
        });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
