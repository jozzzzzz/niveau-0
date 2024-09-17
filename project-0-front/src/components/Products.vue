<script>
import { getProducts } from '../requests/requests'

export default {
  data() {
    return {
      products: {}
    }
  },
  async created() {
    this.products = await this.loadProducts()
  },
  methods: {
    async loadProducts() {
      return await getProducts()
    }
  }
}
</script>

<template>
  <div class="table-title">
    <div>Nom</div>
    <div>Description</div>
    <div>Prix</div>
  </div>
  <div
    v-for="product in products"
    class="table"
    :key="product.id"
    @click="$router.push(`/product/${product.id}`)"
  >
    <div>{{ product.name }}</div>
    <div>{{ product.description }}</div>
    <div>{{ product.price }}</div>
  </div>
</template>

<style scoped>
.table {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1em;
  border-top: 1px solid #ccc;
  text-align: left;
}
.table-title {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 1em;
  font-weight: bold;
  text-align: left;
}
.table-title div {
  margin-right: 40px;
}
.table div {
  margin-right: 40px;
}
</style>