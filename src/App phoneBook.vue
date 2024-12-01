<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
  return {
    firstName:'saxjaxy',
    FIRSTNAME:0,
    lastName:'jaxy',
    LASTNAME:1,
    phoneNumber:'000',
    PHONE:2,

    items:new Map([['bytecoder',['Coder','Byte','8885559999']]]),
  }
},
methods:{
  submit(){
    this.items.set(this.lastName.toLocaleLowerCase()+this.firstName.toLocaleLowerCase(),[this.firstName,this.lastName,this.phoneNumber])
  },
  sortedList(){
    
    return Array.from(
      this.items)
      .sort(
        (a,b) => 
        a[0].toLowerCase()
        .localeCompare(
          b[0].toLowerCase()
        )
  
      );
  }


}
}

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

<h1>{{firstName}}</h1>
<p>{{ items }}</p>
<div>
  <input v-model="firstName"/>
  <input v-model="lastName"/>
  <input v-model="phoneNumber"/>
  <button v-on:click="submit">Submit</button>
</div>

<table>
  <thead>
    <tr>
      <td>first name</td>
      <td>last name</td>
      <td>phone</td>
    </tr>
  </thead>
  <tbody>
  <tr v-for="(item) of this.sortedList()" :key="item">
    <td>{{ item[1][FIRSTNAME] }}</td>
    <td>{{ item[1][LASTNAME] }}</td>
    <td>{{ item[1][PHONE] }}</td>
  </tr>
</tbody>
</table>
  <RouterView />
</template>

<style scoped>

</style>
