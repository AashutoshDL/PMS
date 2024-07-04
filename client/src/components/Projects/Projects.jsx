import React, { useEffect, useState } from 'react';
import './projects.css';
import { useNavigate, Link }from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_backend_url}/api/projects`);
        if(response.data.length>0){
          setProjects(response.data);
        }else{
        toast.warning("No data found in the database")
        }
      } catch (error) {
        console.error("Error while fetching projects", error);
        toast.error("Error fetching Projects");
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_backend_url}/api/deleteproject/${id}`);
        // Update state to remove the deleted project
        setProjects(projects.filter(project => project._id !== id));
        toast.success("Project deleted successfully");
      } catch (error) {
        console.error("Error deleting project", error);
        toast.error("Error deleting project");
      }
    }
  };
  

  return (
    <div className="projects-container mt-5">
      <button className='btn btn-secondary' onClick={() => { navigate('/') }}>Home</button>
      <h1 className="mb-4">Projects</h1>
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              {/* <th scope="col">Project Id</th> */}
              <th scope="col">Project Name</th>
              <th scope="col">Project Type</th>
              <th scope="col">Members</th>
              <th scope="col">Project Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">Loading...</td>
              </tr> 
            ) : (
              projects.map((project) => (
                <tr key={project._id}>
                  {/* <td>{project._id}</td> */}
                  <td>{project.projectName}</td>
                  <td>{project.projectType}</td>
                  <td>{project.members}</td>
                  <td>{project.projectStatus}</td>
                  <td>
                  <Link to={`/updateprojects/${project._id}`} className="btn btn-primary">Update</Link>
                  <button className='btn btn-danger' onClick={()=>{handleDelete(project._id)}}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <div className="projects-button">
          <button className='btn btn-primary' onClick={() => { navigate('/addprojects') }}>Add</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Projects;
