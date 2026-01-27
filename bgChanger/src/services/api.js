
export const fetchProduct = async() => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
}

export const fetchProductById = async(id)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    return res.json();
}