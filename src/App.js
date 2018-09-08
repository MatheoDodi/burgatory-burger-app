import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';



class App extends Component {

  render() {

    return (
      <Router>
        <Layout>
          <Switch>
						<Route exact path='/' component={BurgerBuilder}/>
						<Route path="/checkout" component={Checkout} />
						<Route render={() => <div style={{width: '100%', textAlign: 'center'}}><h1>Oops, You must've taken a wrong turn somewhere! <br /> We know you're hungry, so why not navigate to our <NavLink to="/">Home</NavLink> Page?</h1></div>} />
					</Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
