import React from 'react';
import { array } from 'prop-types';

const Orders = props => {
    return (

      <div>
        
        <div>
          {props.orders.map((order, index) => {
            return (
              <div className="container" style={{textAlign:"center", width:"700px", background:'E8E8E8' }}> 
                  <div key={order.email} style={{backgroundColor:"#EFDECD", height:"25%", marginTop:"3px", marginBottom:"3px"}} >
                    <h1 style={{ fontFamily:"Pacifico", color:"#AB274F" }} >Your Order</h1>
                    {/* <h1>{index + 1}</h1> */}
                    <h5 style={{fontFamily:"Permanent Marker",}}>{order.firstName} {order.lastName}</h5>
                    <h5 style={{fontFamily:"Permanent Marker",}}>{order.phoneNumber} * {order.email}</h5>
                    <h5 style={{fontFamily:"Permanent Marker",}}>{order.orderDetail}</h5>
                    <h5 style={{fontFamily:"Permanent Marker",}}>{order.orderPrice}</h5>
                  </div>

              </div>    
            )
          })}
        </div>
      </div>
    );
  }

  
  Orders.propTypes = {
    orders: array
  }
  
  export default Orders;