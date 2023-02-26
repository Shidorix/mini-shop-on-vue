<template>

<div class="main-container__header">
  
  <router-link :to="{name: 'catalog'}">
      <div style="display: flex; align-items: center;">
      <img src="../assets/kitty.png" alt="">
      <h1>МАГАЗИН <p>КУПИ! ПОЖАЛУЙСТА</p></h1>
    </div>
  </router-link>
    
    
<router-link :to="{name: 'cart'}">
    <div style="display: flex; justify-content: center; align-items: center;">
        <img  style="width: 70px; height: 70px;" src="../assets/cart.png" alt="">
        <p>Количество: {{ CART.length }} </p>
    </div>
</router-link>
    
    
</div>


  <router-view></router-view>

</template>

<script>

import cart from './cart.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'main-container',
    props: {},
    components: {cart},
    data() {},
    computed: {
      ...mapGetters(['CART', 'PRODUCTS'])
    }

}
</script>

<style lang="sass">



.main-container 
    display: flex
    justify-content: center
    max-width: 80%
    align-items: center
    margin: 0 auto
    
    &__header
        display: flex
        justify-content: space-between
        max-width: 80%
        align-items: center
        margin: 0 auto
        text-align: center
        h1
        font-family: Raleway
        text-decoration: none
    
</style>