import { useState, useEffect } from "react";
import TaskDetails from './TaskDetails';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    // Fetch tasks from the server
    // Example: fetch('/api/tasks').then(res => res.json()).then(data => setTasks(data));
  }, []);

  return (
    <div>
      <ul id="task-list">
        {tasks.map(task => (
          <li key={task.id} onClick={() => setSelectedTask(task)}>
            {task.title}
          </li>
        ))}
      </ul>
      <TaskDetails task={selectedTask} />
    </div>
  );
}

export default TaskList;
