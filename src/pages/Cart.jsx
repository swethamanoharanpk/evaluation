import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeItem} from '../redux/productSlice'


function Cart() {
    const [count,setCount] = useState()
    const dispatch = useDispatch()
    const displayItem = useSelector((selected)=>selected.showProduct.cartone)
    const displayItems = displayItem.length
    console.log("5555",displayItems)

    const itemRemove = (i)=>{
        dispatch(removeItem(i))
    }



  return (
    <div>
    <h4>Cart Product Details</h4>
    
    {displayItem.map((li)=>{
        return(
            <li>
            <h2>{li.title}</h2>
            <img style={{width:"400px"}} src={li.images} alt="" />
            <h4>Price:{li.price}</h4>
            <p>{li.description}</p>
            <h6>Rating:{li.rating}</h6>
            <h6>Stock:{li.stock}</h6>
            <button>INC</button><button>QUAN:{count}</button><button>DEC</button>
            <br />
            <button onClick={()=>itemRemove(li.id)}>Remove</button>

            </li>
        )

    })}
    
    </div>
  )
}

export default Cart