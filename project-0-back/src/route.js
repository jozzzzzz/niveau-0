import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "./queries.js";
import { v4 as uuid } from 'uuid';

export function test(req, res) {
    res.send('Hello World!')
}

export async function getProduct(req, res) {
    console.log('getProduct');
    const products = await getAllProducts();
    console.log(products);
    res.json(products);
}

export async function postGetProductById(req, res) {
    const id = req.params;
    const product = await getProductById(id);
    console.log(product);
    res.json(product);
}

export async function postAddProduct(req, res) {
    try {
        const product = req.body;
        product.id = uuid();
        await addProduct(product);
        console.log(product);
        res.send('Product added');
    } catch (error) {
        res.send('Error adding product');
    }
}

export async function postUpdateProduct(req, res) {
    try {
        const product = req.body.product;
        await updateProduct(product);
        console.log(product);
        res.send('Product updated');
    } catch (error) {
        res.send('Error updating product');
    }
}

export async function postDeleteProduct(req, res) {
    try {
        const id = req.params.id;
        await deleteProduct(id);
        console.log(product);
        res.send('Product deleted');
    } catch (error) {
        res.send('Error deleting product');
    }
}