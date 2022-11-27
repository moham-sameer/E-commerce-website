import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount : 0

    
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
          const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
          if(itemIndex >= 0){
            state.cartItems[itemIndex] = 
            {
                ...state.cartItems[itemIndex], quantity:state.cartItems[itemIndex].quantity + 1
            }
          }else{
            const temp = {...action.payload, quantity:1}
            state.cartItems.push(temp)
          }
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
          const data = state.cartItems.filter((item)=> item.id !== action.payload)
          state.cartItems = data

          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        clearCart(state,action){
          state.cartItems = []
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        decCart(state,action){
          const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
          if(state.cartItems[itemIndex].quantity > 1){
            state.cartItems[itemIndex].quantity -=1
          }
          else if(state.cartItems[itemIndex].quantity === 1){
            const data = state.cartItems.filter((item)=> item.id !== action.payload.id)
              state.cartItems = data
          }
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        getTotals(state,action){
          let {total, cartQuantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
           
            const {price,quantity} = cartItem
            const itemTotal = price * quantity

               cartTotal.total += itemTotal
               cartTotal.cartQuantity += quantity
               return cartTotal

           
          },{
            total:0,
            cartQuantity:0
          }
          )
          state.cartTotalQuantity = cartQuantity
          state.cartTotalAmount = total
        }

    }
})
 
export const {addToCart,removeFromCart,clearCart,decCart,getTotals} = cartSlice.actions;
 export default cartSlice.reducer;