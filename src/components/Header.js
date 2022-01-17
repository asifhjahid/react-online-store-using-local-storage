import React from 'react'
import { Link } from 'react-router-dom'
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
                    <Link to='/cart'>Cart:</Link> (0)
                     </li>                    
                </ul>
        </HeaderStyle>
    )
}
