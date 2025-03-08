import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './Create';
import View from './View';






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;