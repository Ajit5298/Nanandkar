
import './App.css';
import { Homepage } from './Components/Homepage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
    <Route excat path='/' element={<Homepage/>}/>
    
    </Routes>
   
  </div>
  );
}

export default App;
