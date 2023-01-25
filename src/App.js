import './App.css';
import Home from './pages/Home';
import BookmarkModal from './components/BookmarkModal';
import GroupModal from './components/GroupModal';
import { ContextProvider } from './context';
import { Toaster } from 'react-hot-toast';

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
    <Toaster/>
    </ContextProvider>
  );
}

export default App;
