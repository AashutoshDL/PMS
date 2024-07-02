import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SkillMuseum from './components/skillMuseum/SkillMuseum';
import Events from './components/Events/Events';
import Projects from './components/Projects/Projects';
import AddProjects from './components/Projects/AddProjects';
import {ToastContainer} from "react-toastify"
import UpdateProjects from './components/Projects/UpdateProjects';

function App() {
  return (
    <Router>
      <ToastContainer />
      {/* <Navbar /> */}
      <Routes>
      <Route path='/' element={<SkillMuseum />} />
      <Route path='/events' element={<Events />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/addprojects' element={<AddProjects />} />
      <Route path='/updateprojects/:id' element={<UpdateProjects />} />
      </Routes>
    </Router>
  )
}

export default App
