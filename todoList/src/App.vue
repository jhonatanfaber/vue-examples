<template>
  <div id="app">
    <div class="list-wrapper">
      <h1> Shopping List</h1>
      <input v-model="product.name" @keyup.enter="addProduct">

      <div class="list-wrapper__ buttons">
        <button @click="addProduct">Add Product </button>
        <button @click="checkAll">Check all </button>
        <button @click="cleanAll">Clean all </button>
      
      </div>

      <div class="list-wrapper__product">
        <product 
          v-for="product in productList" :key="product.id"
          :productName="product"
          @deleteProduct="removeProduct"
      ></product>
      </div>
    </div>
    
  </div>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",
  components: {
    Product
  },
  data() {
    return {
      product: {},
      productList: []
    };
  },
  methods: {
    createNewProduct() {
      let newProduct = {
        name: this.product.name,
        checked: false,
        id: Date.now() + this.product.name
      };
      return newProduct;
    },
    addProduct() {
      this.product = this.createNewProduct();
      this.productList.push(this.product);
      this.product = {};
    },
    checkAll() {
      this.productList.forEach(product => {
        product.checked = true;
      });
    },
    cleanAll() {
      this.productList.forEach(product => {
        product.checked = false;
      });
    },
    removeProduct(idComingfromSon) {
      this.productList.forEach((product, index) => {
        if (product.id == idComingfromSon) {
          this.productList.splice(index, 1);
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.line {
  color: blue;
}
</style>
