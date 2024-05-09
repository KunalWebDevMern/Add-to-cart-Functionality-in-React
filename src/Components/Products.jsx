import React from 'react'
import { products } from '../Data/Product'
import Product from './Product'

function Products() {
  return (
    <div className='max-w-[1280px] m-auto w-[90%]'>
        <h1>Best of ARC</h1>
        <div className='grid gap-[30px] sm:grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] mt-[2rem]  '>
        {products.map(product => <Product key={product.id} {...product}/>)}
        </div>
    </div>
  )
}

export default Products