import Navabar from './components/mainPage';
import Events from './components/events';
import {Routes, Route} from "react-router-dom";
import F_details from './components/f_details';
import Tech from './components/tech';
import Footer from './components/footer';
import Gallery from './components/gallery';
function App() {

  return (
    <div className="App">
    
     <Routes>
          <Route path='/' element = {<div><Navabar/><F_details/><Tech/><Footer/></div>}></Route>                            
          <Route path='/event' element={<Events/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
