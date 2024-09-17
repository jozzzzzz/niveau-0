import { createMemoryHistory, createRouter } from 'vue-router'
import Helloworld from './components/Helloworld.vue'
import Products from './components/Products.vue'
import AddProducts from './components/AddProducts.vue'
import Product from './components/Product.vue'

const routes = [
  { path: '/', component: Products },
  { path: '/product/:id', component: Product },
  { path: '/addProduct', component: AddProducts },
  { path: '/editProduct', component: Helloworld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router