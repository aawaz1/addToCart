// import { createSlice } from "@reduxjs/toolkit"


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState : {
//         cart : []
//     },
//     reducers : {
//         addToCart : (state , action) =>

//          {
//             state.cart.push(action.payload);
//         },
//         removeFromCart : (state,action) => {
//             state.cart = state.cart.filter(x=>x.id !== action.payload.id);

//         },
        

//     }

// })


  
 
  
  
  
  
  
  

// export default cartSlice.reducer
// export const {addToCart ,removeFromCart ,increaseProduct} = cartSlice.actions


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload.id);
    },
    increaseProduct: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.find((x) => x.id === id);
      console.log(state.cart);
      


      if (state.cart) {
        state.cart.quantity += 1;
        console.log(state.cart);
      }
    },
    decreaseProduct: (state, action) => {
      const { id } = action.payload;
      const product = state.cart.find((x) => x.id === id);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        // Remove the product from the cart if its quantity becomes zero
        state.cart = state.cart.filter((x) => x.id !== id);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseProduct, decreaseProduct } = cartSlice.actions;
