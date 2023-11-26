import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/cartSlice';

function Product({id,title, image}) {
   const  dispatch = useDispatch();
  return (
    <div>
      
        <h3>{title}</h3> 
        <img src={image} alt="" />
        
        <br />
        <button onClick= {() => dispatch(addToCart({id,title,image})) }>Add to Cart</button>
        

        
    </div>
  )
}

export default Product