<template>
    <div class="productWrapper" :class="{'line':productName.checked}"> 
            {{productName.name}} 
        <input type="checkbox" v-model="productName.checked">
        <a @click="sendDeleteMessage"><i class="fas fa-trash-alt"></i></a> 
    </div>

</template>

<script>
export default {
  //NOTE: :class="{'line': checked}" is only created when checked
  //variable is true (see vue docu, Class and Style Bindings)
  name: "Product",
  props: ["productName"],
  methods: {
    sendDeleteMessage(){
      this.$emit("deleteProduct", this.productName.id)
    }
  }
};
</script>

<style scoped>
.line {
  text-decoration: line-through;
  color: rgb(110, 7, 7);
}
</style>



