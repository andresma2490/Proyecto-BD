<template>
  <div class="usu">
    <h1>USUARIOS</h1>
      <ul>
        <li v-for= "user in usuarios">
            {{user.name}} - {{user.email}}
        </li>
      </ul>
      <form v-on:submit.prevent= "addUser">
        <input type="text" v-model="newUser.name" placeholder="name">
        <input type="text" v-model="newUser.email" placeholder="email">

        <button type="submit">
          agregar
        </button>
      </form>
  </div>

</template>

<script>
  export default{
    data(){
      return{
        usuarios: [
          {
            name: 'sarah',
            email: 's@rah.com'
          },
          {
            name: 'pc',
            email: 'c@roline.com'
          },
          {
            name: 'todd',
            email: 't@dd.com'
          },

        ],
        newUser:{}
      }
    },
    methods:{
      addUser(){
        console.log("agregando usuario ", this.newUser);
        this.usuarios.push(this.newUser);
      }
    },
    created(){
      console.log('component creado');//el primero que carga
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.usuarios=res.body);
    }


  }
</script>

<style lang="css">
  .usu{
    background: #666;
    padding: 15px;
  }
</style>
