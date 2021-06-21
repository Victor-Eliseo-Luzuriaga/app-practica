import './App.css';
import Navbar from './components/navbar/navbar';
import ListCards from './components/cards/ListCards';
function App() {
  return (
    <div className="App">
      <h1>Mi primera app en React</h1>
      <Navbar></Navbar>
      <ListCards></ListCards>
    </div>
  );
}

export default App;
