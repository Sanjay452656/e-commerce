import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { fetchProductById } from '../services/productApi';
import { addToCart } from '../features/cartSlice';

const ProductDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    const [product,setProduct] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
       if (!id) return;
        const loadProduct = async () => {
          try {
            const data=await fetchProductById(id);
            setProduct(data);
          } catch (err) {
            console.error("Product not found");
          }finally{
            setLoading(false);
          }
        }
        loadProduct();
    },[id]);

    if(loading){
      return <div className='p-6'>Loading ...</div>
    }
    if(!product) {
        return <div className='p-6'>Product not found</div>
    }

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 object-contain mx-auto"
      />
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-xl font-semibold mt-4">₹{product.price}</p>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
