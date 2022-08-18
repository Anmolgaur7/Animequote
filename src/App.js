import './App.css';
import Landing from "./components/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import List from './components/List';
import Quote from './components/Quote';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/list" element={<List/>}/>
          <Route exact path="/quote/Naruto" element={<Quote title="Naruto"/>}/>
          <Route exact path="/quote/FairyTail" element={<Quote title="Fairy Tail"/>}/>
          <Route exact path="/quote/AssassinationClassroom" element={<Quote title="Assassination Classroom"/>}/>
          <Route exact path="/quote/HunterXHunter" element={<Quote title="Hunter X Hunter"/>}/>
          <Route exact path="/quote/OnePiece" element={<Quote title="One Piece"/>}/>
          <Route exact path="/quote/Bleach" element={<Quote title="Bleach"/>}/>
          {/* <Route exact path="/quote/Tokyo ghoul:re" element={<List/>}/>
          <Route exact path="/quote/" element={<List/>}/>
          <Route exact path="/quote/" element={<List/>}/>
          <Route exact path="/quote/" element={<List/>}/>
          <Route exact path="/quote/" element={<List/>}/> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
