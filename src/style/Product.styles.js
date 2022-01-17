import styled from 'styled-components';

const ProductStyle = styled.div`
       .product{
        margin: 1rem;
        border: 1px solid rgb(158, 191, 218);
        padding: 1rem;
        max-width: 280px;
        position: relative;
            &:hover{
                background-color: rgba(166, 203, 235, 0.1);
                border: 1px solid rgb(238, 132, 132);
            }
            .addToCart{
                position: absolute;
                /* width: 100px; */
                /* height: 100px; */
                text-align: center;
                /* top: calc(50% - 100px / 2); */
                /* left: calc(50% - 100px / 2); */
                /* font-size: 4rem; */
                padding: 1rem;
                /* border: 1px solid grey; */
                background-color: white;
                button{
                    cursor: pointer;
                }
            }
            img {
                max-height: 200px;
                }
            .tag{
                border: 1px solid rgb(172, 174, 175);
                padding: 0.5rem 1.5rem;
                display: inline-block;
                margin: 0.25rem;
            }
            .color{
                border: 1px solid rgb(172, 174, 175);
                padding: 0.5rem 1.5rem;
                display: inline-block;
                margin: 0.25rem;
            }
       } 

        
`
export default ProductStyle;