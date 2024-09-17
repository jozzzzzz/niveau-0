<script>
import { addProduct } from '../requests/requests';

export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0
      },
      message: ''
    }
  },
  methods: {
    async addProductToList() {
      try {
        addProduct(this.product);
        this.$router.push('/');
      } catch (e) {
        this.message = e.message;
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="addProductToList">
    <input type="text" v-model="product.name" placeholder="Nom du produit" />
    <input type="text" v-model="product.description" placeholder="Description du produit" />
    <input type="number" v-model="product.price" placeholder="Prix du produit" />
    <button type="submit">Ajouter</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 1em;
  padding: 0.5em;
}
</style>