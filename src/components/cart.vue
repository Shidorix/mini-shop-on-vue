<template>

  <div class="cart">

    <div style="margin: 0 100px 0 100px;">
      <cartItem
    v-for="(item, index) in CART"
     :key="item.article" 
     :cart_item_data="item" 
     @deleteFromCart="deleteFromCart(index)"
     @deleteStoimost="deleteStoimost(index)"
    />
    </div>
      

    <div style="margin: 0 100px 0 100px; padding-top: 100px;">

      

      <form class="form" v-if="CART.length" action="#">
        <label for="name">Имя</label>
         <br>
        <input id="name" required><br>
        <label for="telephone">Телефон</label>
        <br>
        <input id="telephone" required><br>
        <label for="email">Номер карты</label>
        <br>
        <input id="email"><br>
      </form>

      <div v-if="CART.length" class="cart-item__button-wrapper">
        <button>ОПЛАТИТЬ ТОВАРЫ</button>
      </div>

      <div class="stoimost" v-if="CART.length">
        <p>Общая стоимость</p>
        <p style="padding-top: 10px;"> {{ STOIMOST }} </p>
      </div>
      

    </div>

    
  </div>

  <p style="text-align: center; font-family: Raleway; font-size: 35px;" v-if="!CART.length"> Вы не добавили ни одного товара</p>
      

</template>

<script>
import cartItem from '../components/cart-item.vue';
import { mapActions, mapGetters } from "vuex";
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
    computed: {
      ...mapGetters(['CART', 'STOIMOST']),
    },
    methods: {
      ...mapActions(['DELETE_FROM_CART', 'SET_STOIMOST', 'DELETE_STOIMOST']),
      deleteFromCart(index) {
        this.DELETE_STOIMOST(index)
        this.DELETE_FROM_CART(index);
      },
      // setStoimost(data) {
      //   this.SET_STOIMOST(data)
      // },
      // deleteStoimost(index) {
      //   this.DELETE_STOIMOST(index)
      // }

    },
    data() {
        return {
          stoimost: 0,
        }
    },

}
</script>

<style scoped lang="sass">
.cart
  display: flex
  justify-content: center
  // align-items: center
.cart-item__button-wrapper
  // position: absolute
  // right: 200px
  // top: 200px
  text-align: center
  button
    cursor: pointer
    border-radius: 10px
    width: 400px
    height: 100px
    background: #FFFFFF
    border: 1px solid #C4C4C4
    font-family: 'Roboto Condensed'
    font-style: normal
    font-weight: 400
    font-size: 24px
    line-height: 18px
    text-align: center
    letter-spacing: 0.6px
    color: #242121
    transition: all 0.3s ease 0s
    &:hover
      background: #00B2A0
      color: #FFFFFF

.stoimost
  border: 2px #00B2A0 solid
  border-radius: 10px
  border-left: none
  border-right: none
  margin-top: 20px
  padding-top: 20px
  padding-bottom: 20px
  display: flex
  justify-content: center
  flex-direction: column
  font-family: 'Roboto Condensed'
  font-style: normal
  font-weight: 400
  font-size: 24px
  line-height: 18px
  text-align: center
  letter-spacing: 0.6px
  color: #242121
  p
    margin: 0

.form
  width: 569px
  input
    border-top: none
    border-right: none
    border-left: none
    border-color: #DADADA
    font-size: 20px
    width: 100%
    // height: 50px
    margin-bottom: 60px
    padding-top: 40px
    &:focus
      outline: none !important
  label
    color: #00B2A0
    font-family: 'Roboto Condensed'
    font-style: normal
    font-weight: 400
    font-size: 18px
    line-height: 18px
    letter-spacing: 0.6px
    padding-top: 5px
</style>