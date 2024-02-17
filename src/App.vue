<template>
  <form>
  <div>
    <label>
      <span>E-mail:</span>
      <input v-model="email" class="form-control" ref="email">
<!--      <div v-if="v$.email.$error" :class="{'error':v$.email.$error}" class="error-msg">Please Enter your E-mail{{v$.email.minLength.$params.min}}</div>-->
      <div ></div>
    </label>
    </div>
    <div>
      <label>
        <span>Password:</span>
        <input v-model="passwords.password" class="form-control">
<!--        <div v-if="v$.passwords.password.$error" :class="{'error':v$.passwords.password.$error}" class="error-msg">Password must be {{v$.passwords.password.minLength.$params.min}} characters</div>-->
        <div ></div>
      </label>
    </div>
    <div>
      <label>
        <span>confirm Password: </span>
        <input v-model="passwords.confirmPassword" class="form-control">
<!--        <div v-if="v$.passwords.confirmPassword.$error" :class="{'error':v$.passwords.confirmPassword.$error}" class="error-msg">Please Enter your password</div>-->
        <div ></div>
      </label>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent.stop="submitForm">Submit</button>
    <button class="btn btn-info" @click.prevent.stop="v$.$reset()">Reset</button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required,/*email,minLength*/} from "@vuelidate/validators";

export default {
  name: "App",
  data() {
    return {
      v$: useVuelidate(),
      email: null,
      passwords:{
        password:null,
        confirmPassword:null
      },
      passwordMustbe: false
    };
  },
  methods:{
    async submitForm(){
      const isFormValid = await this.v$.$validate()
      console.log(this.v$)
      if(!isFormValid) return
    }
  },
  validations(){
    const localRules={
     email:{required}
    }
    if(!this.passwordMustbe){
      const passwords={
        password:{required},
        confirmPassword: {required}
      }
      localRules['password'] = passwords
    }
    return{
      // email:{required,email,minLength:minLength(10)},
      // passwords:{
      //   password:{
      //     required,
      //     minLength:minLength(10)
      //   },
      //   confirmPassword:{required}
      // }
      localRules
    }
  }
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

.error-msg{
  color:red;
  font-size: 14px;
  display:none;
}
.error{
  color:red;
  font-size: 14px;
  display: block;
}
</style>
