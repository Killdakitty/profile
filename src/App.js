
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Articles from './pages/Articles';
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Nav from './components/Nav';

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
 <Route path='/contact' element={<Contact />}/> 



   </Routes>

      
   

    </div>
  );
}

export default App;
