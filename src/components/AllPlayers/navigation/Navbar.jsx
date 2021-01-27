import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
   render() { 
        return ( 
            <div>
                <Link to='/'>Home</Link>
                <Link to='/login'>Log In</Link>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/upload'>Upload</Link>
                <Link to='/citywide'>Citywide Elections</Link>
                <Link to='/citycouncil'>City Council Elections</Link>
                <Link to='/congressional'>Congressional Elections</Link>
            </div>
         );
    }
}
 
export default Navbar;
