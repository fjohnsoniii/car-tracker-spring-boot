import logo from './logo.svg';
import './App.css';
import CarContainer from './Car/CarContainer';
import CustomerContainer from './Customer/CustomerContainer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Utility/Navbar';
import AddCustomer from './Customer/AddCustomer';
import AddCar from './Car/AddCar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/cars' component={CarContainer}/>
        <Route exact path='/customers' component={CustomerContainer}/>
        <Route exact path='/add-customer' component={AddCustomer}/>
        <Route exact path='/add-car' component={AddCar}/>
      </Switch>
    </Router>
  )
}

export default App;
