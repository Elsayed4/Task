import './App.css';
import  LoginForm from './Component/Login'
import Navbar from './Component/Navbar/Navbar.jsx';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Component/Home/Home.jsx';
import Counter from './Component/Counter/counter.jsx';

function App() {
  return (
    <Router>
       <div className="container">
       <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/counter" component={Counter} />
         <Route  path="/login" component={LoginForm} />
      </Switch>
       </div>
    </Router>
  );
}

export default App;
