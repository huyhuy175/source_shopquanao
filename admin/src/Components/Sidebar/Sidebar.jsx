import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from '../../assets/Product_list_icon.svg'
import list_user from '../../assets/user.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none", color:"black"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none", color:"black"}}>
            <div className="sidebar-item">
                <img src={list_product_icon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
        <Link to={'/listuser'} style={{textDecoration:"none", color:"black"}}>
            <div className="sidebar-item">
                <div className="user">
                <img src={list_user} alt="" />
                <p>User List</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar