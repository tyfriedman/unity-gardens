import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VolunteerData from './volunteer_data';
import ClassData from './class_data';
import EducationData from './kids_education_data';
import EventData from './event_data';
import GardenGuide from './garden_guide';
import './App.css';

// Create a Home component for the main page
function Home() {
  return (
    <div className="nav-boxes">
      <Link to="/garden_guide" className="nav-box">Garden Visitor Form</Link>
      <Link to="/volunteer_data" className="nav-box">Volunteer Form</Link>
      <Link to="/class_data" className="nav-box">Class Form</Link>
      <Link to="/education_data" className="nav-box">Kids Education Form</Link>
      <Link to="/event_data" className="nav-box">Event Form</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://www.theunitygardens.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Unity Gardens
          </a>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer_data" element={<VolunteerData />} />
          <Route path="/class_data" element={<ClassData />} />
          <Route path="/education_data" element={<EducationData />} />
          <Route path="/event_data" element={<EventData />} />
          <Route path="/garden_guide" element={<GardenGuide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
