import { useState } from 'react';
import './addprojects.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
const AddProjects = () => {
  const navigate = useNavigate();
  const [newProject, setNewProject] = useState({
    projectName: '',
    projectType: '',
    members: '',
    projectStatus: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic form validation
    if (!newProject.projectName || !newProject.projectType || !newProject.members || !newProject.projectStatus) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_backend_url}/projects/addprojects`, newProject);
      toast.success("Project Added");
      navigate('/projects');
    } catch (error) {
      console.error("Error occurred", error);
      toast.error("Unexpected Error. Please try again");
    }
  };
  return (
    <div className="addproject-container mt-5">
      <form onSubmit={handleSubmit}>
        <h2>Add New Project</h2>
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">Project Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="projectName" 
            name="projectName" 
            value={newProject.projectName} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="projectType" className="form-label">Project Type</label>
          <select 
            className="form-select" 
            id="projectType" 
            name="projectType" 
            value={newProject.projectType} 
            onChange={handleChange} 
          >
            <option value="">Select Type</option>
            <option value="Web">Web</option>
            <option value="AI">AI</option>
            <option value="3D">3D</option>
            <option value="IoT">IoT</option>
          </select>
        </div>
        <div className="mb-3">
  <label htmlFor="members" className="form-label">Members</label>
  <select 
    className="form-select" 
    id="members" 
    name="members" 
    value={newProject.members} 
    onChange={handleChange}
  >
    <option value="" disabled>Select a member</option>
    <option value="Apil Ghimire">Apil Ghimire</option>
    <option value="Aashutosh Dahal">Aashutosh Dahal</option>
    <option value="Amiks Karki">Amiks Karki</option>
    <option value="Anuja Gautam">Anuja Gautam</option>
    <option value="Arjun Gaywali">Arjun Gaywali</option>
    <option value="Aaryan Shrestha">Aaryan Shrestha</option>
    <option value="Bimal Magar">Bimal Magar</option>
    <option value="Jitendra Thapa">Jitendra Thapa</option>
    <option value="Kaustuv Duwadi">Kaustuv Duwadi</option>
    <option value="Kristan Dharel">Kristan Dharel</option>
    <option value="Milan Thapa">Milan Thapa</option>
    <option value="MOHAMMAD Taushif Reza">MOHAMMAD Taushif Reza</option>
    <option value="Pranav Kattel">Pranav Kattel</option>
    <option value="Prakit Karanjit">Prakit Karanjit</option>
    <option value="Bibek Poudel">Bibek Poudel</option>
    <option value="Ram Nepali">Ram Nepali</option>
    <option value="Saksham Shrestha">Saksham Shrestha</option>
    <option value="Sambij Pandey">Sambij Pandey</option>
    <option value="Satyam Dulal">Satyam Dulal</option>
    <option value="Suyog Bhattrai">Suyog Bhattrai</option>
    <option value="Zokchen Tamang">Zokchen Tamang</option>
    <option value="Niraj Pradhan">Niraj Pradhan</option>
    <option value="Bhusan Luitel">Bhusan Luitel</option>
  </select>
</div>
        <div className="mb-3">
          <label htmlFor="projectStatus" className="form-label">Project Status</label>
          <select 
            className="form-select" 
            id="projectStatus" 
            name="projectStatus" 
            value={newProject.projectStatus} 
            onChange={handleChange} 
          >
            <option value="" disabled>Select Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Project
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/projects')}>
          Back
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default AddProjects;