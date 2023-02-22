<template>

<div class="main-container__header">
        <h1>МАГАЗИН <p>КУПИ! ПОЖАЛУЙСТА</p></h1>
    <cart/>
    </div>


  <div class="main-container">


    
    
  </div>
  <div>
    <catalog/>
  </div>
</template>

<script>

import catalog from './catalog.vue'
import cart from './cart.vue'

export default {
    name: 'main-container',
    components: {catalog, cart},
    props: {},
    data() {},

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