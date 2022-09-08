import React from 'react';
import './header.css'

function Header (props){
    return(
        <>
     <div className='header'> 
        <img src={props.cliente} alt='logo cliente'/>
     </div>
       
     </>
    )
}

export default Header;