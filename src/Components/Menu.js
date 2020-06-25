import React from 'react';
import image1 from '../images/thaitea.png';
import image2 from '../images/almondmilktea.png';
import image3 from '../images/icetea.png';
import image4 from '../images/mochaandfruit.png'
import image5 from '../images/greentea.png'
import image6 from '../images/coffeecup.png'

const Menu = () => {
    return(
<div>

<h1 style={{fontFamily:"Pacifico", color:'#AB274F' ,textAlign:"center"}}>Menu...</h1>

<div className="container d-flex row mb-4">

<div className="col-xl-4" 
style={{display:"flex-top", 
justifyContent:"center", borderRadius:"10%"}}>
    <div style={{height:'75%', textAlign:'center'}} >        
    <img style={{height:'100', width:'100%', borderRadius:'50%'}} src={image1} alt="mocha and fruits">
    </img>
    </div>
    <h3 style={{height:'25%', width:'100%', textAlign:"center", 
    fontFamily:"Pacifico", color:'#FF8324'}}>Thai Tea</h3>
  
</div> 

<div className="col-xl-4" 
style={{display:"flex-bottom", 
justifyContent:"center", borderRadius:"10%"}}>
    <div style={{height:'75%', textAlign:'center'}} >        
    <img style={{height:'291.32px', width:'100%', borderRadius:'50%'}}
     src={image2} alt="mocha and fruits">
    </img>
    </div>
    <h3 style={{height:'25%', width:'100%', textAlign:"center", 
    fontFamily:"Pacifico", color:'#F19CBB'}}>Almond Tea</h3>
</div> 

<div className="col-xl-4" 
style={{display:"flex-top", 
justifyContent:"center", borderRadius:"10%"}}>
    <div style={{height:'75%', textAlign:'center'}} >        
    <img style={{height:'291.32px', width:'100%', borderRadius:'50%'}} src={image3} alt="black">
    </img>
    </div>
    <h3 style={{height:'25%', width:'100%', textAlign:"center",
     fontFamily:"Pacifico", color:'#577053'}}>Black Tea</h3>
</div> 

</div>


<div className="container d-flex row mb-4">

<div className="col-xl-4" 
style={{display:"flex-top", 
justifyContent:"center", borderRadius:"10%"}}>
    <div style={{height:'75%', textAlign:'center'}} >        
    <img style={{height:'291.31px', width:'100%', borderRadius:'50%'}}
     src={image4} alt="Fruity">
    </img>
    </div>
    <h3 style={{height:'25%', width:'100%', textAlign:"center", 
    fontFamily:"Pacifico", color:'#AF002A'}}>Fruity Tea</h3>
  
</div> 

<div className="col-xl-4" 
style={{display:"flex-bottom", 
justifyContent:"center", borderRadius:"10%"}}>
    <div style={{height:'75%', textAlign:'center'}} >        
    <img style={{height:'291.32px', width:'100%', borderRadius:'50%'}} 
    src={image5} alt="Green Tea">
    </img>
    </div>
    <h3 style={{height:'25%', width:'100%', textAlign:"center", 
    fontFamily:"Pacifico", color:'#3B7A57'}}>Green Tea</h3>
</div> 

<div className="col-xl-4" 
style={{display:"flex-top", 
justifyContent:"center", borderRadius:"10%"}}>
    <div style={{height:'75%', textAlign:'center'}} >        
    <img style={{height:'291.32px', width:'100%', borderRadius:'50%'}} src={image6} alt="coffee">
    </img>
    </div>
    <h3 style={{height:'25%', width:'100%', textAlign:"center", 
    fontFamily:"Pacifico", color:'#C46210'}}>Coffee</h3>
</div> 

</div>








        </div>
        //page div
    );  
    //return    
}
//const

export default Menu; 

