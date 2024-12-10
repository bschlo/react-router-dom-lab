import { Link } from "react-router-dom";

import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <Link to='/'>
            <li>Home</li>
            </Link> 
            <Link to='/mailboxes'>
            <li>Mailboxes</li>
            </Link>   
            <Link to='/new-mailbox'>
            <li>New Mailbox</li>
            </Link>  
            
        </ul>
    </nav>
  )
}

export default NavBar