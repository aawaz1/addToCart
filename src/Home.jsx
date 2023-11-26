import React from 'react'
import Product from './Product'


import './index.css'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom' 
import keyboard from './../src/webp/keyboard.webp'
import mouse from './../src/webp/mouse.webp';


function Home({image,title}) {
    
    const cartitems = useSelector(state => state.cart.cart)
  return (
    <div>
        <div className="flex">
            <h2>Code</h2>
            <Link  to={"/checkout"} ><h4  >
                Cart <small>{cartitems.length}</small>
            </h4></Link>
        </div>
        <div className="">
            <div className="">
                <Product title={'This is a keyboard'}
                          image={keyboard} />
            </div>
           
            <div className=""><Product title={'This is a mouse'}
                                      image={mouse}
                                       
            
                             />
                          </div>

        </div>
    </div>
  )
}

export default Home