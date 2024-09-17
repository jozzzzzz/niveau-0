<script>
import { getProductByid } from '../requests/requests';

export default {
  data() {
    return {
      product: {}
    }
  },
  async created() {
    this.product = await this.loadProduct()
    console.log(this.product)
  },
  methods: {
    async loadProduct() {
      return await getProductByid(this.$route.params.id)
    }
  }
}
</script>

<template>
  <div>
    <div class="content">ID: {{ product.id }}</div>
    <div class="content">Name: {{ product.name }}</div>
    <div class="content">Description: {{ product.description }}</div>
    <div class="content">Price: {{ product.price }}</div>
  </div>
</template>

<style scoped>
</style>