<template>

    
  <div class="catalog">

    <catalogItem
    v-for="product of PRODUCTS"
     :key="product.article"
     :product_data="product"
     @addToCart = 'addToCart'
    />
  </div>
</template>

<script>

import catalogItem from './catalog-item.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'catalog',
    props: {},
    components: {catalogItem},
    data() {
        return {}
    },
    computed: {
        ...mapGetters(['PRODUCTS'])
    },
    methods: {

        ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART', 'SET_STOIMOST']),

        addToCart(data) {
            this.ADD_TO_CART(data);
            this.SET_STOIMOST(data)
        }
    },

    mounted() {
        this.GET_PRODUCTS_FROM_API().then((response) => {
            if (response.data) {
                console.log('Данные пришли');
            }
        });
    }
        
}
</script>

<style lang="sass">
.catalog
    display: flex
    justify-content: center
    flex-wrap: wrap
    img
        width: 70px
        height: 70px
    
    
</style>