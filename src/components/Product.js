import React, { useContext, useState } from 'react';
import cartContext from '../context/cartContex';
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
    const ctx = useContext(cartContext);
    return (
            <ProductStyle>
                    <div className={`product ${hover && 'hover'}`}
                    onMouseEnter={()=>setHover(true)}
                    onMouseLeave={()=>setHover(false)}
                    >
                        
                        <div className='addToCart'>
                                <button type='button' onClick={()=>ctx.addToCart({
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
