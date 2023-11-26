import React from 'react'
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { increaseProduct, removeFromCart} from './redux/cartSlice'
function CheckOut() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state=> state.cart.cart);
  return (
    <div>
    <h2>CheckOut</h2>
    {
        cartItems.map((item, index) => {
            
            return (
                <div>
                    <img src={item.image} alt="" />
                    <div>
                        <h4>{item.title}</h4> 
                        <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                        <button onClick={() => dispatch(increaseProduct(item))}>+</button>
 <br />
                        <button>-</button>
                    </div>
                </div>

            )
        })
    }
    </div>
  )
}

export default CheckOut