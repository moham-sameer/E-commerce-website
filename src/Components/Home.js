import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import CardsData from "./CardsData";

import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";
import Navbar from './Navbar'

const Home = () => {
  const history = useNavigate()
  const dispatch = useDispatch()
  const [data, setdata] = useState(CardsData);
  const add = (product)=>{
     history('/cart')
    dispatch(addToCart(product))
  }
 
  return (
    <div className="body">
    <Navbar/>
 
      <div data-aos="fade-up" className="products">
        {data.map((element) => {
          return (
            <div className="product" key={element.id}>
               <img src={element.image} alt=''/>
              <table>
                <tbody>
                  <td className="content">
                    <p>{element.category}</p>
                    <p>
                      {" "}
                      <strong> Price:</strong>${element.price}
                    </p>
                    <p>
                      {" "}
                      <strong>Rating:</strong> {element.rating.rate}★
                    </p>
                  </td>
                </tbody>
              </table>
              <button onClick={()=>add(element)}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
