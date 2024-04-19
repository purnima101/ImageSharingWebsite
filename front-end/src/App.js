import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Routes, Navigate  } from "react-router-dom";
import User from './pages/user/User';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<User />} />
      
      {/* <Redirect to="/"/> */}
      </Routes>
    </Router>
  );
}

export default App;
