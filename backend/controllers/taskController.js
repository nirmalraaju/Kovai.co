import { supabase } from '../config/db.js';

// GET all tasks
export const getTasks = async (req, res) => {
  const { data, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// POST create task
export const createTask = async (req, res) => {
  const { title, description, urgency } = req.body;
  const { data, error } = await supabase
    .from('tickets')
    .insert([{ title, description, urgency, status: 'Open' }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data[0]);
};

// PUT update task (Escalation/Status)
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { status, urgency } = req.body;
  
  const { data, error } = await supabase
    .from('tickets')
    .update({ status, urgency })
    .eq('id', id)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};