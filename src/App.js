// import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import {Route,Routes} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    
    <div className="App">
      
     <Routes>
       <Route Path="/Home" element={<Home/>}/>
       <Route Path="/About" element={<About/>}/>
       <Route Path="/Product" element={<Products/>}/>


       
     </Routes>
    </div>

  );
}

export default App;
