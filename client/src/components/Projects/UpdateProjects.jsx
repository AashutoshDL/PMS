import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProjects = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    projectName: '',
    projectType: '',
    members: '',
    projectStatus: ''
  });

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(`https://pms-kohl-two.vercel.app/projectsbyid/${id}`);
        const projectData = response.data;
        setProjectData({
          projectName: projectData.projectName,
          projectType: projectData.projectType,
          members: projectData.members,
          projectStatus: projectData.projectStatus
        });
      } catch (error) {
        console.error("Error fetching project data", error);
        toast.error("Error fetching project data");
      }
    };
    fetchProjectData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://pms-kohl-two.vercel.app/updateprojects/${id}`, projectData);
      toast.success("Project updated successfully");
      navigate('/projects');
    } catch (error) {
      console.error("Error updating project", error);
      toast.error("Error updating project");
    }
  };

  return (
    <div className="update-projects-container mt-5">
      <h1 className="mb-4">Update Project</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            className="form-control"
            id="projectName"
            name="projectName"
            value={projectData.projectName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            className="form-select"
            id="projectType"
            name="projectType"
            value={projectData.projectType}
            onChange={handleChange}
          >
            <option value="">Select Type</option>
            <option value="Web">Web</option>
            <option value="AI">AI</option>
            <option value="3D">3D</option>
            <option value="IoT">IoT</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="members">Members</label>
          <select
            className="form-select"
            id="members"
            name="members"
            value={projectData.members}
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
        <div className="form-group">
          <label htmlFor="projectStatus">Project Status</label>
          <select
            className="form-select"
            id="projectStatus"
            name="projectStatus"
            value={projectData.projectStatus}
            onChange={handleChange}
          >
            <option value="" disabled>Select Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-secondary me-2" onClick={() => navigate('/projects')}>Back</button>
          <button className="btn btn-success" type="submit">Update</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProjects;
