import './App.css';
import Landing from "./components/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from './components/List';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/list" element={<List/>}/>
        </Routes>
      </Router>

    </>
  );
}

export default App;
