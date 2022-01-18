import React, { useState } from 'react';
import { addToCart } from '../context/productContext';
import ProductStyle from '../style/Product.styles';

export default function Product({
    id,
    name,
    imageUrl,
    price,
    tags,
    colors,
}) {

    const { hover, setHover} = useState(false);
    return (
            <ProductStyle>
                    <div className={`product ${hover && 'hover'}`}
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    >
                        <div className='addToCart'>
                                <button type='button' onClick={()=>addToCart({
                                    id,
                                    name,
                                    price,
                                })}>Add To Cart</button>
                        </div>
                      <div className='cart'>
                      <img src={imageUrl} alt={name} />
                        <div className='name'>{name}</div>
                        <div className='price'>Price: {price}</div>
                        <div>
                            Tags:{' '}
                        {
                            tags.map((tag)=>(
                                <span className='tag'>{tag}</span>
                            ))
                        }
                        </div>
                        <div>
                        Available in:{' '}
                        {
                            colors.map((color)=>(
                                <span className='color'>{color}</span>
                            ))
                        }
                        </div>
                      </div>
                    </div>
            </ProductStyle>
    )
}
