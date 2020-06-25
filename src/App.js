import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Gallery from './Components/Gallery';
import Blurb from './Components/Blurb';
import OrderForm from './Components/OrderForm';
import Orders from './Components/Orders';
import Footer from './Components/Footer';
import Menu from './Components/Menu';


const App = () => {

  const order1 = {
  
    firstName: "Michael",
    lastName: "Jordan",
    phoneNumber: "808-867-5309",
    email: "thegoat@bing.com",
    orderDetail: "Thai Tea",
    orderPrice: "$4.00"
  }

  const [orders, setOrders] = useState([order1]);

  // const addOrderHandler = (firstName, lastName, phoneNumber, email, orderDetail, orderPrice) => {

  // }
  

  return (
    <Router>
      
    <div className="App">
      
      <div style={{height:"10%"}}>
        <NavBar/>
      </div>
      <div style={{height:"20%"}}>
        <Gallery/>
      </div>
    <Switch>
    <Route exact path="/">
  
      <div className="mt-4 mb-4" style={{height:"15%"}}>
        <Blurb/>
      </div>  
      <div className="container" style={{height:"20%"}}>
        <Menu/>
      </div>
      
    </Route>

    <Route path="/menu">
    <div className="container" style={{height:"20%"}}>
        <Menu/>
      </div>

    </Route>


    <Route path="/order">
            
            <div className="d-flex justify-content-center" style={{height:"25%"}}>
              <Orders orders={orders}/>
              <OrderForm orders={orders} addOrderHandler={setOrders}/>
            </div>
      </Route>


  </Switch>
  <div style={{height:"10%"}}>
              <Footer/>
            </div>

  </div>

    
  
  </Router>
  );
}

export default App;
