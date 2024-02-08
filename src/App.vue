<template>
  <div>
    <div>
      <label for="name">First Name:</label>
      <input type="text" v-model="firstName" id="name" />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" v-model="lastName" id="lastName" />
    </div>
    <div>
      <label for="email">Email :</label>
      <input type="text" v-model="email" id="email" />
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "App",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      contact: {
        email: "",
      },
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      const: {
        email: { require, email },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
