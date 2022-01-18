import React from 'react'
import { Link } from 'react-router-dom'
import { getCartItems } from '../context/productContext'
import HeaderStyle from '../style/Header.styles'

export default function Header() {
    return (
        <HeaderStyle>
            <ul>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>

                    <li>
                    <Link to='/products'>Store</Link>
                    </li>

                    <li>
                    <Link to='/about'>About Us</Link>
                    </li>
                   
                    <li>
                    <Link to='/cart'>Cart:</Link> ({getCartItems().length})
                     </li>                    
                </ul>
        </HeaderStyle>
    )
}
