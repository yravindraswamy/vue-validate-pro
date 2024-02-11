<template>
  <form @action="javascript:void(0);" class="form-control">
    <div >
      <label for="name" class="form-label">First Name:</label>
      <input type="text" v-model="firstName" id="name" class="form-text"/>
    </div>
    <div>
      <label for="lastName" class="form-label">Last Name:</label>
      <input type="text" v-model="lastName" id="lastName" class="form-text"/>
    </div>
    <div>
      <label for="email" class="form-label">Email :</label>
      <input type="text" v-model="email" id="email" class="form-text"/>
    </div>
  </form>
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
