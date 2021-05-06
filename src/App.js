import './App.css';
import './assets/main.css'
import Join from './components/JoinComponent';
import Chat from './components/ChatComponent';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Join} />
        <Route exact path="/chat" component={Chat} />
      </Router>
    </div>
  );
}

export default App;
