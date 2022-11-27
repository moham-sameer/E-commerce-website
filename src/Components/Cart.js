import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart, addToCart,clearCart,decCart, getTotals } from '../Store/CartSlice'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = () => {
  const data = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotals())
  },[data,dispatch])
  const remove = (product)=>{
    dispatch(removeFromCart(product))
  }
  const add = (product)=>{
    dispatch(addToCart(product))
  }
  const history = useNavigate()
  const clear = (pro)=>{
    dispatch(clearCart(pro))
    history('/home')
  }
  const dec = (product)=>{
    dispatch(decCart(product))
  }
 

  return (
    <div className='cart'>
    <h1>Your Cart</h1>
    <div className='border-b'></div>
      {
       data.cartItems.length === 0 ? (<div className='empty-cart'><p>Your Cart is currently empty </p>
       <Link to='/home'>
       <div className='start-shopping'><span><KeyboardBackspaceIcon/></span>  <p>Start Shopping</p>  </div>
       </Link>
       </div>):
       (<>
        <div className='data'>
     <h3>Product</h3>
     <h3>Price</h3>
     <h3>Quantity</h3>
     <h3>Total</h3>
       {data.cartItems.map((elem)=>{
        return(
          <>
          <div className='items'>
       <img src={elem.image} alt=''/>
     <div className='desc'>
       <h4> {elem.title}</h4>
     <button onClick={(id)=>remove(elem.id)}>Remove</button>
     </div>
 
 </div>
  <p id='price'>${elem.price} </p>
 <span>
  <button style={{fontSize:"1rem"}} onClick={()=>dec(elem)}>-</button>
      <p>{elem.quantity} </p>
  <button style={{fontSize:"1rem"}}  onClick={()=>add(elem)}>+</button>
 </span>
 <p id='tprice'>${(elem.price*elem.quantity).toFixed(2)}</p>
          </>
        )
       })}
    </div>
    <div className='submit'>
    
     <button onClick={()=>clear(data)} id='clear'>Clear Cart</button>
     <div className='check'>
     <div className='total'>
      <p>Subtotal</p>
      <p>${data.cartTotalAmount.toFixed(2)} </p>
     </div>
     <p className='text'>Taxes and shipping calculated at checkout</p>
     <button>Checkout</button>
     <Link to='/home'>
       <p className='shop'>Continue Shopping</p>
     </Link>
    </div>
     </div>
       </>)
        
      }
    </div>
  )
}

export default Cart
