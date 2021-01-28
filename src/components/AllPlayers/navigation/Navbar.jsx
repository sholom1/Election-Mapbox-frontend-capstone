import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
   render() { 
        return ( 
            <div className='container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/login'>Log In</Link>
                <Link className='link' to='/signup'>Sign Up</Link>
                <Link className='link' to='/upload'>Upload</Link>
                <Link className='link' to='/categories/citywide'>Citywide Elections</Link>
                <Link className='link' to='/categories/citycouncil'>City Council Elections</Link>
                <Link className='link' to='/categories/congressional'>Congressional Elections</Link>
            </div>
         );
    }
}
 
export default Navbar;
