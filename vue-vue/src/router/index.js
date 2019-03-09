import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

import Navegacion from '@/components/Navegacion'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Mapa from '@/components/Mapa.vue'

import Perfil from '@/components/Perfil.vue'
import Configuracion from '@/components/Configuracion.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [

    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },

/*
    {
      path: '/about',
      name: 'about',
      component: About
      //component: ()=> import('@/components/about.vue')
    },*/

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/mapa',
      name: 'Mapa',
      component: Mapa
    },

    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    },

    {
      path: '/configuracion',
      name: 'Configuracion',
      component: Configuracion
    },


  ]
})
