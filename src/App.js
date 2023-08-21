
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Articles from './pages/Articles';
import Projects from './pages/Projects'
import Nav from './components/Nav';
import Weather from './pages/Weather';
import Footer from './components/Footer';
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="App">
      

      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
      {/* </header> */}



<Nav/>
<Routes>
 <Route path='/' element={<Home />}/> 
 <Route path='/articles' element={<Articles />}/> 
 <Route path='/projects' element={<Projects />}/> 
 <Route path='/contacts' element={<Contacts />}/> 

 <Route path='/weather' element={<Weather />}/> 
 <Route path='/weather/:location' element={<Weather/>}/> 




   </Routes>
<Footer />
      
  

    </div>
  );
}

export default App;
