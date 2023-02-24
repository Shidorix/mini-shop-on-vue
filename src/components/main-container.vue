<template>

<div class="main-container__header">
  <div style="display: flex; align-items: center;">
    <img src="../assets/kitty.png" alt="">
    <h1>МАГАЗИН <p>КУПИ! ПОЖАЛУЙСТА</p></h1>
  </div>
    
    <cart 
    v-if="CART.length"
    :cart_data="CART"/>
</div>


  <!-- <div class="main-container">

  </div> -->

  <div>
    <catalog/>
  </div>

</template>

<script>

import catalog from './catalog.vue'
import cart from './cart.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'main-container',
    components: {catalog, cart},
    props: {},
    data() {},
    computed: {
      ...mapGetters(['CART'])
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
    
</style>