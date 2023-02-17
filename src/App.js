import './App.css';
import Home from './pages/Home';
import BookmarkModal from './components/BookmarkModal';
import GroupModal from './components/GroupModal';
import { ContextProvider } from './context';
import { Toaster } from 'react-hot-toast';
import Group from './pages/Group';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <ContextProvider>
    <div className="App">

    <div className="App font-['Poppins'] text-accent">

    <Router>
        <Routes>
          <Route exact path="/group/:name" element={<Group/>}/>          
          <Route path="*" element={<Home/>}/>          
      </Routes>
      </Router>
      </div>

    <BookmarkModal/>
    <GroupModal/>
    </div>
    <Toaster/>
    </ContextProvider>
  );
}

export default App;
