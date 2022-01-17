import React from 'react'
import LayoutStyle from '../style/Layout.styles'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
    return (
        <LayoutStyle>
            <Header />
                {children}
            <Footer />
        </LayoutStyle>
    )
}
