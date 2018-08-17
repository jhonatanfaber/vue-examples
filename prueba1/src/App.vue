<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p class="title">Hi {{ name }}</p>
    <hr>
    
    <input v-model="userName">
    <button @click="addUser">Add</button>
    <hr>
     <User
            v-for="user in users" :key="user.id"
            :sonName="user"
            @buttonPressed="sayHello"
    ></User>
  </div>
</template>

<script>
//v-model: two way databinding

import User from "./components/User";

export default {
  name: "App",
  components: {
    User
  },
  data() {
    return {
      name: "Jhoni",
      username: "",
      users: []
    };
  },
  methods: {
    addUser() {
      this.users.push(this.userName);
      this.userName = "";
    },
    sayHello(nameThatComesFromSon) {
      this.name = nameThatComesFromSon;
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
</style>
