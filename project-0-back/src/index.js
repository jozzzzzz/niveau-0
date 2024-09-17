import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectToDatabase } from './db.js';
import { postAddProduct, getProduct, test, postUpdateProduct, postDeleteProduct, postGetProductById } from './route.js';
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", test);
app.get("/products", getProduct);
app.get("/product/:id", postGetProductById);
app.post("/addProduct", postAddProduct);
app.post("/updateProduct", postUpdateProduct);
app.post("/deleteProduct/:id", postDeleteProduct);

async function startServer() {
  try {
    await connectToDatabase(); // Establish database connection
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`);
    });
  } catch (err) {
    console.error("Failed to start the server", err);
  }
}

startServer();

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing HTTP server and MongoDB connection.');
  await client.close(); // Close MongoDB connection
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing HTTP server and MongoDB connection.');
  await client.close(); // Close MongoDB connection
  process.exit(0);
});