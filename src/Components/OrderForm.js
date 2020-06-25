import React, { useState } from 'react';
import { func } from 'prop-types';

const OrderForm = (props) => {
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");	
	const [phoneNumber, setphoneNumber] = useState("");	
	const [email, setemail] = useState("");
	const [orderDetail, setorderDetail] = useState("");
	const [orderPrice, setorderPrice] = useState("");
	
	const formSubmit = e => {
	e.preventDefault();
	
	const newOrder = {
	firstName: firstName,
	lastName: lastName,
	phoneNumber: phoneNumber,
	email: email,
	orderDetail: orderDetail,
	orderPrice: orderPrice,
	};

	props.addOrderHandler([newOrder, ...props.orders])
	
	};

	let priceDisplay = () => {
		let Display = "hellow price"

		console.log(Display); 
	}
	

    return (
	// <form onSubmit={this.formSubmit}>
	<form style={{background:'#EFDECD', marginBottom:"3px"}}>

        <div className="form-group">
            <div className='d-flex justify-content-between'  style={{height:"100%", width:'100%'}}  >
                <div className="container mt-2 ml-2 mb-2" style={{background:'#577053', height:'400px', borderRadius:"10px"}}>
                   
                   <div style={{display:"flex", width:'98%'}}>
                        
			<label style={{marginTop:"30px", fontFamily:"Pacifico", color:"white", width:'15%' }}>First Name</label>
                        <div style={{width:"40%", marginTop:'30px'}}>
			<input className="rounded" placeholder="Enter First Name"
			value={firstName} onChange={e => {setfirstName(e.target.value)}}/>
			</div>

                        <label style={{width:'15%', marginTop:"30px", fontFamily:"Pacifico", color:"white" }}>Last Name</label>
                        <div style={{width:"35%", marginTop:'30px' }}>
			<input className="rounded" placeholder="Enter Last Name"
			value={lastName} onChange={e=>{setlastName(e.target.value)}}/></div>
                   </div> 

                   <div style={{display:"flex", width:'98%'}}>
                        <label style={{marginTop:"20px", fontFamily:"Pacifico", color:"white", width:'15%' }}>Phone No.</label>
                        <div style={{width:"40%", marginTop:'20px'}}>
			<input className="rounded" placeholder="808-867-5309"
			value={phoneNumber} onChange={e=>{setphoneNumber(e.target.value)}} /></div>

                        <label style={{width:'15%', marginTop:"20px", fontFamily:"Pacifico", color:"white" }}>Email</label>
                        <div style={{width:"35%", marginTop:'20px' }}>
			<input className="rounded" placeholder="hellokitty@hotmail.com"
			value={email} onChange={e=>{setemail(e.target.value)}} /></div>
                   </div>

            <div style={{background:"#EFDECD", width:'98%', borderRadius:"5px", padding:"3%"}}> 
            <h5 style={{fontFamily:"Pacifico", color:"#577053", }}>Order Detail</h5>
			<div style={{width:"98%", marginTop:'20px' }}>
			<input style={{width:"100%"}} placeholder="What would you like?"
			value={orderDetail} onChange={e=>{setorderDetail(e.target.value)}} />
			
			
			</div>		
              		

		 
            	<h5 style={{fontFamily:"Pacifico", color:"#577053"}}>Price</h5>
				<div style={{width:"35%", marginTop:'20px' }}>
				{/* <input className="rounded" placeholder="$4.00"
				value={orderPrice} onChange={e=>{setorderPrice(e.target.value)}} />
				 */}

				{priceDisplay}
				
				
				</div>		
              

			</div>		

		
		

                    <div className="d-flex justify-content-end" style={{width:"98%", marginBottom:"5%"}}>
                    <button type="submit" className="btn btn-info" style={{fontFamily:"Pacifico", marginTop:'3%'}}
			onClick={formSubmit}>Submit</button>
                    </div>
                   




                </div>
	

                
                   
                   


           </div>

        </div>
        </form>
	
    );    //return

}     // const OrderForm

OrderForm.propTypes = {
    addToOrders: func
  }


export default OrderForm;