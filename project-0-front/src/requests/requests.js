import axios from 'axios';

export const getProducts = async () => {
  const { data } = await axios.get('http://localhost:3000/products');
  return data
}

export const getProductByid = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/product/${id}`);
  return data;
}

export const addProduct = async (form) => {
  const product = {
    name: form.name,
    price: form.price,
    description: form.description
  }
  const { data } = await axios.post('http://localhost:3000/addProduct', product);
  return data;
}