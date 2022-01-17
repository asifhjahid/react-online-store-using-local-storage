import React from 'react'
import products from '../assets/data/products.json'
// import Title from '../components/Title'
export default function Home() {
    return (
        <div>
            {/* <Title title='Welcome to our Store' /> */}
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </h1>
      <img src={products[0].imageUrl} alt={products[0].name} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloremque iure tempora cumque ipsam numquam quos veritatis
        rerum quis a, ullam consequatur qui in aliquid maiores hic!
        Delectus possimus molestiae quod.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        quam, id dolorum nulla nisi vero distinctio corrupti culpa
        error. Harum explicabo unde quidem eos modi voluptate
        voluptates veritatis iste accusantium.
      </p>
    
        </div>
    )
}
