import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import OrderComplete from './components/Order/OrderComplete/OrderComplete';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';



class App extends Component {

  render() {

    return (
      <Router>
        <Layout>
          <Switch>
						<Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route exact path='/' component={BurgerBuilder}/>
						<Route render={() => <div style={{width: '100%', textAlign: 'center'}}><h1>Oops, You must've taken a wrong turn somewhere! <br /> We know you're hungry, so why not navigate to our <NavLink to="/">Home</NavLink> Page?</h1></div>} />
					</Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
