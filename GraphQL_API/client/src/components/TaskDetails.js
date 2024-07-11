function TaskDetails({ task }) {
    return (
      <div id="task-details">
        {task ? (
          <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Weight: {task.weight}</p>
          </div>
        ) : (
          <p>Select a task to see details</p>
        )}
      </div>
    );
  }
  
  export default TaskDetails;
  