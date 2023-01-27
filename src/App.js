
import './App.css';
import { Counter } from './components/Counter-UseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>No eS uNa EtApA mAmá</h1>
        <Counter initialValue={0} />
        
      </header>
    </div>
  );
}

export default App;
