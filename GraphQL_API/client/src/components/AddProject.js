import { useState } from "react";

function AddProject(props) {
  const [inputsProject, setInputsProject] = useState({
    title: '',
    weight: 1,
    description: ''
  });

  const handleChange = (e) => {
    const newInputsProject = { ...inputsProject };
    if (e.target.name === "weight") newInputsProject[e.target.name] = parseInt(e.target.value);
    else newInputsProject[e.target.name] = e.target.value;
    setInputsProject(newInputsProject);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  }

  return (
    <form className="project" id="add-project" onSubmit={handleSubmit}>
      <div className="field">
        <label>Project title:</label>
        <input type="text" name="title" onChange={handleChange} value={inputsProject.title} />
      </div>
      <div className="field">
        <label>Weight:</label>
        <input type="number" name="weight" onChange={handleChange} value={inputsProject.weight} />
      </div>
      <div className="field">
        <label>Description:</label>
        <textarea name="description" onChange={handleChange} value={inputsProject.description}></textarea>
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default AddProject;
