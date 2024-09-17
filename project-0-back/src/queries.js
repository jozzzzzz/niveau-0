import { connectToDatabase, getDatabase } from './db.js';

async function getAllProducts() {
    await connectToDatabase();
    const db = getDatabase();
    return db.collection('products').find().toArray();
}

async function getProductById(product) {
    await connectToDatabase();
    const db = getDatabase();
    return db.collection('products').findOne({ id: product.id});
}

async function addProduct(product) {
    await connectToDatabase();
    const db = getDatabase();
    return db.collection('products').insertOne(product);
}

async function updateProduct(product) {
    await connectToDatabase();
    const db = getDatabase();
    const collection = db.collection('products');
    return collection.updateOne({ id: product.id }, { $set: product });
}

async function deleteProduct(id) {
    await connectToDatabase();
    const db = getDatabase();
    const collection = db.collection('products');
    return collection.deleteOne({ id: id });
}

export { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };