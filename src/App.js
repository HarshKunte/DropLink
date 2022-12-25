import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Group from './pages/Group';
import BookmarkModal from './components/BookmarkModal';
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
    <div className="App">
       <Router>
    <div className="App font-['Poppins'] text-accent">
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/group" element={<Group/>}/>
          
         
      </Routes>
      </div>
    </Router>
    <BookmarkModal/>	
    </div>
    </ContextProvider>
  );
}

export default App;
