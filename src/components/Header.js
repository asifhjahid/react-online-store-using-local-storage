import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../context/cartContex'
import HeaderStyle from '../style/Header.styles'

export default function Header() {
    const ctx = useContext(cartContext)
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
                    <Link to='/cart'>Cart:</Link> ({ctx.cart.length})
                     </li>                    
                </ul>
        </HeaderStyle>
    )
}
