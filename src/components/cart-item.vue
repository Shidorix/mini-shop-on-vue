<template>

<div class="cart-item">

  <div class="cart-item__wrapper">
    
    <div>
        <img :src="require('../assets/images/' + cart_item_data.image)" alt="">
    </div>

    <div class="cart-item__wrapper-text">

        <p style="font-size: 35px;"> <strong>{{ cart_item_data.name }}</strong> </p>
        <p style="font-size: 30px;">{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.about }}</p>

    </div>

    <div class="cart-item__deletebutton-wrapper">
      <button @click="deleteFromCart"> Удалить </button>
    </div>

  </div>

</div>

    <div class="cart-item__button-wrapper">
      <button>ОПЛАТИТЬ</button>
    </div>

  </template>
  
  <script>
  export default {
      name: 'cart-item',
      props: {
        cart_item_data: {
          type: Object,
          default() {
            return {};
          }
        }
      },
      methods: {
        deleteFromCart() {
          this.$emit('deleteFromCart')
        }
      },
      data() {
          return {}
      }
  }
  </script>
  
  <style lang="sass">
  // .cart-item
  //   display: flex
  //   justify-content: center
  //   flex-wrap: wrap
  //   align-items: center
  //   flex-basis: 25%
  //   box-shadow: 0 0 8px 0 grey
  //   padding: 20px
  //   margin: 20px
  .cart-item
    background: #fff
    box-shadow: 0 0 8px 0
    border-radius: 15px
    display: flex
    justify-content: center
    flex-direction: column
    align-items: center
    width: 650px
    // margin-bottom: 50px
    margin: 50px
    transition: all 0.3s ease 0s
    &:hover
        // border: 3px solid #00B2A0
        outline: 3px solid #00B2A0
    &__wrapper-text
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
    &__wrapper
        display: flex
        align-items: center
        justify-content: center
        img
            height: 100%
            width: 270px
            padding-top: 40px
    &__button-wrapper
        text-align: center
        button
          cursor: pointer
          border-radius: 10px
          width: 200px
          height: 50px
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
    &__deletebutton-wrapper
        text-align: center
        button
          cursor: pointer
          border-radius: 10px
          width: 100px
          height: 50px
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
  </style>