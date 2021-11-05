import axios from "axios";
import React from "react";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
import { setProducts } from "../redux/action/productActions";
import { useDispatch } from "react-redux";
import Carousel from "./CarouselComponent";


const ProductListing =()=>{

   const dispatch = useDispatch();
    const fetchProducts = async()=>{
        const resp = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
        console.log(err);
        });
        dispatch(setProducts(resp.data));
       
    };

    useEffect(() => {
        fetchProducts();
        
    }, []);
    return (
        <>
         <Carousel />
        <div className="row mx-3 d-flex justify-content-center">
          <ProductComponent />
        </div>
        </>
    )
}

export default ProductListing;