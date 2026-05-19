import { useState, useEffect } from 'react';
import API from '../api/axios';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleCreate = async (taskData) => {
    await API.post('/tasks', taskData);
    fetchTasks();
  };

  const handleUpdate = async (id, updates) => {
    await API.put(`/tasks/${id}`, updates);
    fetchTasks();
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', padding: '20px' }}>
      <div>
        <h2>Create Task</h2>
        <TaskForm onTaskCreated={handleCreate} />
      </div>
      <div>
        <h2>Task Stream</h2>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;