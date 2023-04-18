import './App.css';
import { Presentation } from './pages/Presentation';
import { Route, Routes } from 'react-router-dom';
import { Puzzle } from './pages/game/Puzzle.js';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation/>} />
      <Route path="/puzzle" element={<Puzzle/>} />
    </Routes>
);
}

export default App;
