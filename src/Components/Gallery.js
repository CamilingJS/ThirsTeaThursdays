import React from 'react';
import cafe from '../images/cafecropped.png';
import cafe2 from '../images/cafe2cropped.png';
import cafe3 from '../images/cafe3cropped.png';

const Gallery = () => {
return (
<div style={{height:'98%'}}>

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{height:"350px"}}>
                <div className="carousel-item active">
                    <img className="d-block w-100" style={{marginBottom:"500px"}} src={cafe} alt="First slide"/>
               </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={cafe2} alt="Second slide"/>
                </div>

                <div className="carousel-item">
                    <img className="d-block w-100" src={cafe3} alt="Third slide"/>
                </div>

                
        </div>        
        
    </div>


    <div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>




</div>

);
}

export default Gallery; 