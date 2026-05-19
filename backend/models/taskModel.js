// This represents the structure of your Supabase 'tickets' or 'tasks' table
export const TaskSchema = {
  title: "text (required)",
  description: "text",
  urgency: "L1, L2, or L3",
  status: "Open, In-Progress, Resolved",
  user_id: "uuid (from auth)"
};