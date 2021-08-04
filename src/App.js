
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Reason from './components/Reason/Reason'
import History from './components/History/History'
import News from './components/News/News'
import Explore from './components/Explore/Explore'
import Book from './components/Book/Book'




function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Welcome />
      <Reason />
      <History />
      <News />
      <Explore />
      <Book />
    
      
    </div>
  );
}

export default App;
