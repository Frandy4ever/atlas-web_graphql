import { useState, useEffect } from "react";

function AddTask(props) {
  const [inputs, setInputs] = useState({
    title: '',
    weight: 1,
    description: '',
    projectId: ''
  });

  const handleChange = (e) => {
    const newInputs = { ...inputs };
    if (e.target.name === "weight") newInputs[e.target.name] = parseInt(e.target.value);
    else newInputs[e.target.name] = e.target.value;
    setInputs(newInputs);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  }

  useEffect(() => {
    // Fetch projects to populate the dropdown
    // Example: fetch('/api/projects').then(res => res.json()).then(data => setProjects(data));
  }, []);

  return (
    <form className="task" id="add-task" onSubmit={handleSubmit}>
      <div className="field">
        <label>Task title:</label>
        <input type="text" name="title" onChange={handleChange} value={inputs.title} required />
      </div>
      <div className="field">
        <label>Weight:</label>
        <input type="number" name="weight" onChange={handleChange} value={inputs.weight} required />
      </div>
      <div className="field">
        <label>Description:</label>
        <textarea name="description" onChange={handleChange} value={inputs.description} required></textarea>
      </div>
      <div className="field">
        <label>Project:</label>
        <select name="projectId" onChange={handleChange} value={inputs.projectId} required>
          <option value="" disabled>Select project</option>
          {/* Render project options here */}
        </select>
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default AddTask;
