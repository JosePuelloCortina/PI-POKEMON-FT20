import './App.css';
import { Routes, Route} from "react-router-dom";
// import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail'

import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ="/" element={<LandingPage/>}/>
        <Route exact path ="/home" element = {<Home/>}/>
        <Route exact path ="/home/:id" element = {<Detail/>}/>
        <Route exact path ="/create" element = {<Form/>}/>
      </Routes>   
        
    </div>
  );
}

export default App;