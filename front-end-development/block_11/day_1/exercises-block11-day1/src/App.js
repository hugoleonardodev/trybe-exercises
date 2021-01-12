import List from "./TaskList";
import CardWithButton1 from './Card-1';
import CardWithButton2 from './Card-2';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <div id="hello-react-list">
        <List />
      </div>
      <div id="cards-container">
        <CardWithButton1 />
        <CardWithButton2 />
      </div>
    </div>
  );
}

export default App;
