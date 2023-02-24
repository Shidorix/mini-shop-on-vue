<template>
  <div class="cart__img">
    <img src="../assets/cart.png" alt="">
    <cartItem
    v-for="(item, index) in cart_data" :key="item.article" :cart_item_data="item" @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import cartItem from '../components/cart-item.vue';
import { mapActions } from "vuex";
export default {
    name: 'cart',
    components: {
      cartItem,
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      ...mapActions(['DELETE_FROM_CART']),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index);
      }
    },
    data() {
        return {}
    }
}
</script>

<style scoped lang="sass">
.cart__img
    img
        width: 70px
        height: 70px
</style>