import React, { useState } from 'react';
import ProductStyle from '../style/Product.styles';

export default function Product({
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
            </ProductStyle>
    )
}
