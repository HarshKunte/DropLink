import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import BookmarkModal from './components/BookmarkModal';
import GroupModal from './components/GroupModal';
import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
    <div className="App">

    <div className="App font-['Poppins'] text-accent">
        <Home/>
      </div>

    <BookmarkModal/>
    <GroupModal/>
    </div>
    </ContextProvider>
  );
}

export default App;
