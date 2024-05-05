import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hangman from './pages/Hangman';
import LanndingPage from './pages/LanndingPage';

function App() {
  return (
    <div className="App">
      
      <Routes><Route path='/' element={<LanndingPage></LanndingPage>}></Route></Routes>
      <Routes><Route path='/game' element={<Hangman></Hangman>}></Route></Routes>

    </div>
  );
}

export default App;
