import React, { useEffect, useState } from 'react'
import { fetchProduct } from '../services/api';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productApi';

const Home = () => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const loadProducts =async () => {
            try {
                const data = await fetchProducts();
                setProducts(data)
            } catch (err) {
                console.error("Failed to fetch products");
            }finally{
                setLoading(false)
            }
        }
        loadProducts();
    },[])
    
     if (loading) {
    return <div className="p-10 text-center">Loading products...</div>;
  }
    
  return (
    <div className="p-6 animate-fadeIn grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product)=>(
            <ProductCard key={product._id} product={product} />
        ))}
    </div>
  )
}

export default Home
