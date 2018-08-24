<template>
    <div class="productWrapper" :class="{'line':productName.checked}"> 
            {{productName.name}} 
        <input type="checkbox" v-model="productName.checked">
        <a @click="a"><i class="fas fa-trash-alt"></i></a> 
    </div>

</template>

<script>
export default {
  //NOTE: :class="{'line': checked}" is only created when checked
  //variable is true (see vue docu, Class and Style Bindings)
  name: "Product",
  props: ["productName"],
  methods: {
    a(){
      console.log("aaaaaaaaaa");
      
    }
  }
};
</script>

<style >
.line {
  text-decoration: line-through;
  color: rgb(110, 7, 7);
}
</style>



