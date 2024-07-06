import Home from './pages/home';

import Rightlocation from './pages/Rightlocation';
import Soilprep from './pages/soilprep';
import Stepby from './pages/stepby';
import Firstyear from './pages/firstyear';
import Choosefertilizer from './pages/choosefertilizer';
import Annual from './pages/annual';
import Navbar from "./components/Navbar";


// import Header from './components/Header';




import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';





import './App.css';




function App() {
  return (
      <div>
        <Router>
        <Navbar />
        <Routes>
         <Route exact path= "/" element={<Home />}></Route>
         <Route exact path= "/Rightlocation" element={<Rightlocation />}></Route>
         <Route exact path= "/soilprep" element={<Soilprep />}></Route>
         <Route exact path= "/stepby" element={<Stepby />}></Route>
         <Route exact path= "/firstyear" element={<Firstyear />}></Route>
         <Route exact path= "/choosefertilizer" element={<Choosefertilizer />}></Route>
         <Route exact path= "/annual" element={<Annual />}></Route>

         
         
          









        </Routes>
        </Router>
      </div>
  );
}


export default App;
