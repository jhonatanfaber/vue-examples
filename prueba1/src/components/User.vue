<template>
<div>
    <h3> {{sonName}} </h3>
    <button @click="sayHello">Come on, say Hello</button>
</div>
    
</template>

<script>
export default {
  // props: Su valor es pasado desde el exterior.
  props: ["sonName"],
  methods: {
    sayHello() {
      //emit crea un evento personalizado el cual escucharemos
      // con v-on en nuestro componente padre.
      this.$emit("buttonPressed", this.sonName);
    }
  }
};
</script>

<style>
</style>
