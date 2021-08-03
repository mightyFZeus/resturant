
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import Reason from './components/Reason/Reason'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Welcome />
      <Reason />
    </div>
  );
}

export default App;
