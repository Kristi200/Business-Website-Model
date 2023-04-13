import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import TeamMembers from './Pages/TeamMembers';
import Resources from './Pages/Resources';
import LearningModules from './Pages/LearningModules';
import AboutUs from './Pages/AboutUs';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Learning" element={<LearningModules/>}/>
          <Route path='/OurTeam' element={<TeamMembers/>}/>
          <Route path="//Resources" element={<Resources/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
