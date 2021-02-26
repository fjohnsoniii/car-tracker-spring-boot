import logo from './logo.svg';
import './App.css';
import CarContainer from './Car/CarContainer';
import CustomerContainer from './Customer/CustomerContainer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Utility/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/cars' component={CarContainer}/>
        <Route exact path='/customers' component={CustomerContainer}/>
      </Switch>
    </Router>
  )
}

export default App;
