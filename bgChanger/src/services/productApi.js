import apiClient from "./apiClient"

export const fetchProducts = async () => {
    const res= await apiClient.get('/products');
    return res.data;
};

export const fetchProductById = async (id) => {
    const res= await apiClient.get(`products/${id}`);
    return res.data;
};

export const createProducts = async (productData) => {
    const res= await apiClient.post("/products",productData);
    return res.data;
}