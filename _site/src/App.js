import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import page1 from "./Pages/page1";
import chat from "./Pages/page2";
import history from './Pages/history';
{/* import page2 from "./Pages/page2"; */}


function App() {
    
  function redirect() {
    window.location.href = 'http://localhost:5000';
    return null;
  }

  return (
    <div className="App">
      <Router history={history}>
        <main>
          <Switch>
            <Route path="/page1" exact component={page1} />
             <Route path="/page2" exact component={chat}/>
             <Route path="/" exact render={redirect()}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
