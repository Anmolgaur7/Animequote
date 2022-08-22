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
          <Route exact path="/list/quote/Naruto" element={<Quote title="Naruto"/>}/>
          <Route exact path="/list/quote/FairyTail" element={<Quote title="Fairy Tail"/>}/>
          <Route exact path="/list/quote/AssassinationClassroom" element={<Quote title="Assassination Classroom"/>}/>
          <Route exact path="/list/quote/HunterXHunter" element={<Quote title="Hunter X Hunter"/>}/>
          <Route exact path="/list/quote/OnePiece" element={<Quote title="One Piece"/>}/>
          <Route exact path="/list/quote/Bleach" element={<Quote title="Bleach"/>}/>
          <Route exact path="/list/quote/Tokyoghoul:re" element={<Quote title="Tokyo ghoul:re"/>}/>
          <Route exact path="/list/quote/ShingekinoKyojin" element={<Quote title="Shingeki no Kyojin"/>}/>
          <Route exact path="/list/quote/OnePunchMan" element={<Quote title="One Punch Man"/>}/>
          <Route exact path="/list/quote/NarutoShippuuden" element={<Quote title="Naruto Shippuuden"/>}/>
          <Route exact path="/list/quote/BokunoHeroAcademia" element={<Quote title="Boku no Hero Academia"/>}/>
          <Route exact path="/list/quote/DragonBallSuper" element={<Quote title="Dragon Ball Super"/>}/>

        </Routes>
      </Router>

    </>
  );
}

export default App;
