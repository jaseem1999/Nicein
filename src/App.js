import './App.css';
import Signin from './Components/Signin/Signin';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Route exact path="/"  >
          <Home/>
        </Route>
       
        <Route exact path="/main"  >
          <Main/>
        </Route>
      
        <Route exact path="/login"  >
          <Login/>
        </Route>
       
        <Route exact path="/signin">
          <Signin/>
        </Route>
      
    </div>
    </Router>
  );
}

export default App;
