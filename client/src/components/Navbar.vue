<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/"><a class="navbar-brand" href="#">Vue-dioh</a></router-link>
        <router-link to="/trending" ><a class='nav-link' href="#">Trending Vuedios</a></router-link>
        <router-link to="/liked" ><a class='nav-link' href="#">liked Vuedios <small>(3)</small></a></router-link>
        <div class="header-right">
          <input v-if="!loginStatus" v-model="dataUser" type="text" placeholder="email">
          <input v-if="!loginStatus" v-model="password" type="password" placeholder="password">
          <button v-if="!loginStatus" class="btn-info"  type="button" @click="submitLogin">Login</button>
          <button v-if="loginStatus" class="btn-info"  type="button" @click="submitLogout">Logout</button>
          <p v-if="errorLogin" style="color:red">invalid password/email</p>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return{
            dataUser:'',
            password:'',
            errorLogin : false
        }
    },
    computed:{
        ...mapState(['loggedin']),
        loginStatus(){
            return this.loggedin
        }
    },
    created(){
        this.errorLogin = false 
        if(localStorage.getItem('token')){
            this.isLogin(true)
        }
    },
    methods:{
        ...mapActions(['isLogin','profile']),
        submitLogout(){
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            this.isLogin(false)

        },
        submitLogin(){   
            this.errorLogin = false         
            let email = this.dataUser.indexOf('@')            
            if(email !== -1){                
                let data = {
                    email : this.dataUser,
                    password: this.password
                }
                axios.post('http://localhost:3000/users/signin', data)
                    .then((result) => {                                                
                        localStorage.setItem('token',result.data.token)
                        localStorage.setItem('userId',result.data.id)
                        this.profile(result.data.foundUser)
                        this.isLogin(true)
                    }).catch((err) => { 
                        this.isLogin(false)
                        this.errorLogin = true
                    });
            }
            else if( email == -1){
                let data = {
                    username : this.dataUser,
                    password: this.password
                }
                axios.post('http://localhost:3000/users/signin', data)
                    .then((result) => {                        
                        localStorage.setItem('token',result.data.token)
                        localStorage.setItem('userId',result.data.id)
                        this.isLogin(true)
                        this.profile(result.data.foundUser)
                        
                    }).catch((err) => { 
                        this.isLogin(false)
                        this.errorLogin = true
                    });                
            }            
        }
    }
}
</script>

<style>
    .nav-link {
        color: darkblue;
    }
</style>
