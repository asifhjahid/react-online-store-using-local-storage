import React from 'react'
import products from '../assets/data/products.json'
import Product from '../components/Product'
import Title from '../components/Title'
import ProductPageStyle from '../style/ProductPage.styles'

export default function ProductPage() {
    return (
        <ProductPageStyle>
             <Title title='Our products are awesome' />
                <h1>Welcome to our store!</h1>

                <div className='products'>
                    {products.map((product) => (
                    <Product  {...product} />
                    ))}
                </div>
        </ProductPageStyle>
    )
}
