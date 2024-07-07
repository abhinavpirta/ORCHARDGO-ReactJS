import Navbar from "./components/Navbar";
import Home from './pages/home';
import Rightlocation from './pages/rightlocation';
import Soilprep from './pages/soilprep';
import Stepby from './pages/stepby';
import Firstyear from './pages/firstyear';
import Choosefertilizer from './pages/choosefertilizer';
import Annual from './pages/annual';
import Rightspray from "./pages/rightspray";
import Schedule from "./pages/schedule";
import Application from "./pages/application";
import Ripeness from "./pages/ripeness";
import Packing from "./pages/packing";
import Storage from "./pages/storage";
import Prune from "./pages/prune";
import Basics from "./pages/basics";
import Advanced from "./pages/advanced";
import Graft from "./pages/graft";
import Howgraft from "./pages/howgraft";
import Benefits from "./pages/benefits";
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
         <Route exact path= "/rightspray" element={<Rightspray />}></Route>
         <Route exact path= "/schedule" element={<Schedule />}></Route>
         <Route exact path= "/application" element={<Application />}></Route>
         <Route exact path= "/ripeness" element={<Ripeness />}></Route>
         <Route exact path= "/packing" element={<Packing />}></Route>
         <Route exact path= "/storage" element={<Storage />}></Route>
         <Route exact path= "/prune" element={<Prune />}></Route>
         <Route exact path= "/basics" element={<Basics />}></Route>
         <Route exact path= "/advanced" element={<Advanced />}></Route>
         <Route exact path= "/graft" element={<Graft />}></Route>
         <Route exact path= "/howgraft" element={<Howgraft />}></Route>
         <Route exact path= "/benefits" element={<Benefits />}></Route>

         
         
          









        </Routes>
        
        </Router>
      </div>
  );
}


export default App;
