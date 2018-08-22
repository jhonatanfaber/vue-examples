<template>
    <div class="productWrapper" :class="{'line':productName.checked}"> 
            {{productName.name}} 
        <input type="checkbox" v-model="productName.checked">
    </div>
</template>

<script>
export default {
  //NOTE: :class="{'line': checked}" is only created when checked
  //variable is true (see vue docu, Class and Style Bindings)
  name: "Product",
  props: ["productName"]
};
</script>

<style >
.line {
  text-decoration: line-through;
  color: rgb(110, 7, 7);
}
</style>



