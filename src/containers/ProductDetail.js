import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectProduct, removeProduct} from "../redux/action/productActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductDetail =()=>{
    const product = useSelector((state)=> state.product);
    const {image,title,price,description,} = product;
    console.log(product);
  const {Id} = useParams();
  console.log(Id);
  const dispatch = useDispatch();
  const fetchSingleProduct = async()=>{
      const resp = await axios.get(`https://fakestoreapi.com/products/${Id}`).catch((err)=>{
      console.log(err);
      });
      dispatch(selectProduct(resp.data));  //to send to store
  };

  useEffect(() => {
   if(Id && Id!=="") fetchSingleProduct();
      return () =>{
        dispatch(removeProduct());
      };
  }, [Id]);
    return (
        <div>
            {Object.keys(product).length===0 ? (<div>
                ...Loading
            </div>) :(
        
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..." style={{height:"500px"}} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">$ {price}</small></p>
      
    </div>
  </div>
</div>
            )}
        </div>
    )
}

export default ProductDetail;