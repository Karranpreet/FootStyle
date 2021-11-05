import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/productActions";
import ReactStars from "react-rating-stars-component";

const ProductComponent =()=>{
    const products = useSelector((state)=> state);
    const dispatch = useDispatch();
   
    const renderList = products.allProducts.products.map((p)=>{
        const {id,title,image ,price} = p;
        return(
            <div className="col-md-3 my-3 justify-content-center" key={id}>
            <div className="card" style={{width: '18rem'}} >
                <Link to={`/product/${id}`} style={{textDecoration:'none',color:'black'}} >
        <div>
        <img src={image} className="card-img-top pt-2 img-responsive" style={{width:"100px",height:"100px",margin:"0 auto"}} />
        <div className="card-body">
          <h5 className="card-title">{title.substring(0,40)}...</h5>
          <div style={{paddingLeft:"23%"}}>
       <ReactStars value={3} size={30}/>
       </div>
          <p className="card-text">$ {price}</p>
          </div>
       
        </div>
       
        </Link>
        <button onClick={()=> dispatch(addToCart(id))} className="btn btn-dark">Add to Cart</button>
        </div>
       
      
      </div>);
    })
    return (
      <>{renderList}</>
       
    )
}

export default ProductComponent;