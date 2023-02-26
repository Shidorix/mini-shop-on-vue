<template>

  <div class="cart">

    <div style="margin-right: 100px;">
      <cartItem
    v-for="(item, index) in CART"
     :key="item.article" 
     :cart_item_data="item" 
     @deleteFromCart="deleteFromCart(index)"
     @deleteStoimost="deleteStoimost(index)"
    />
    </div>
      

    <div style="margin-left: 100px; padding-top: 100px;">

      

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

    </div>

    <!-- <p> {{ STOIMOST }} </p> ПОПЫТАЛСЯ РЕАЛИЗОВАТЬ ОБЩУЮ СТОИМОСТЬ! ЧУТОК НЕ ПОЛУЧИЛОСЬ! НАПОМИНАЛКА НАДО НЕ ЗАБЫТЬ СПРОСИТЬ У ПРЕПОДОВАТЕЛЕЙ -->

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
        this.DELETE_FROM_CART(index);
        this.DELETE_STOIMOST(index)
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