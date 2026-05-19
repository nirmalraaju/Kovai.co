import express from 'express';
import { getTasks, createTask, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getTasks);       // GET http://localhost:5000/api/tasks
router.post('/', createTask);    // POST http://localhost:5000/api/tasks
router.put('/:id', updateTask);  // PUT http://localhost:5000/api/tasks/1

export default router;