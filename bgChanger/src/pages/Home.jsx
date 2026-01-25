import React, { useEffect, useState } from 'react'
import { fetchProduct } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetchProduct().then((data)=>setProducts(data))
    },[])

  return (
    <div className="p-6 animate-fadeIn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product)=>(
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Home
