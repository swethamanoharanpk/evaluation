import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
  import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,MDBIcon
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem,addToCart } from '../redux/productSlice';

  
  

function Product() {
    const [item,setItem] =  useState([]);
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            console.log(res.data)
            setItem(res.data.products.slice(0,10))
            dispatch(addItem(res.data))
        })
    },[])

    function toCart(items){
        dispatch(addToCart(items))
    }
  return (
    <div>
    <div>
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>E-commerce</MDBNavbarBrand>
        <Link to={'/cart'}><MDBIcon fas icon="shopping-cart" /></Link>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="product search" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>
    </div>

    <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",overflow:"scroll"}}>
    {item.map((li)=>{
        return(
    <MDBCard style={{width:"300px"}}>
      <MDBCardImage src={li.images} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle style={{height:"60px"}}>{li.title}</MDBCardTitle>
        <MDBCardTitle style={{height:"60px"}}>PRICE:{li.price}</MDBCardTitle>
        <MDBBtn href='#'>Buy Now</MDBBtn>
        <MDBBtn  style={{marginLeft:"6px"}} href='#' onClick={()=>toCart(li)}>Add To Cart</MDBBtn>
      </MDBCardBody>
    </MDBCard>

        )
    })}
    
    
    </div>

    </div>

  )
}

export default Product