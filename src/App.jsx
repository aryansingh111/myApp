import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { Insert } from './Components/Insert';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/insert" element={<Insert/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
