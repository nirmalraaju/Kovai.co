const TaskCard = ({ task, onUpdate }) => {
  const urgencyColors = { L1: '#fee2e2', L2: '#fef3c7', L3: '#dbeafe' };
  const textColors = { L1: '#991b1b', L2: '#92400e', L3: '#1e40af' };

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '10px', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        <span style={{ 
          backgroundColor: urgencyColors[task.urgency], 
          color: textColors[task.urgency], 
          padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' 
        }}>{task.urgency}</span>
      </div>
      <p style={{ color: '#666', fontSize: '14px' }}>{task.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Status: {task.status}</span>
        <div style={{ display: 'flex', gap: '5px' }}>
          {task.status !== 'Resolved' && (
            <button onClick={() => onUpdate(task.id, { status: 'Resolved' })} style={{ cursor: 'pointer', padding: '5px' }}>Resolve</button>
          )}
          {task.urgency !== 'L1' && (
            <button onClick={() => onUpdate(task.id, { urgency: task.urgency === 'L3' ? 'L2' : 'L1' })} style={{ cursor: 'pointer', padding: '5px', background: '#333', color: '#fff' }}>Escalate</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;