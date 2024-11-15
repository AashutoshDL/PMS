import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Projects from './components/Projects/Projects';
import AddProjects from './components/Projects/AddProjects';
import {ToastContainer} from "react-toastify"
import UpdateProjects from './components/Projects/UpdateProjects';
import Auth from './components/Auth/Auth';
import UserProfiles from './components/Profile/UserProfiles';
function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/addprojects' element={<AddProjects />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<UserProfiles />} />
      <Route path='/updateprojects/:id' element={<UpdateProjects />} />
      </Routes>
    </Router>
  )
}
export default App
