<template>
  <div class="catalog-item">

    <div class="catalog-item__wrapper">
        
        <div>
            <img :src="require('../assets/images/' + product_data.image)" alt="">
        </div>

        <div class="catalog-item__wrapper-text">

            <p style="font-size: 35px;"> <strong>{{ product_data.name }}</strong> </p>
            <p style="font-size: 30px;">{{ product_data.price }}</p>
            <p>{{ product_data.about }}</p>

            <div class="catalog-item__button-wrapper">
                <button @click="addToCart">Buy</button>
            </div>

        </div>
        
    </div>

    
    

  </div>
</template>

<script>
export default {
    name: 'catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            },
        }
    },
    data() {
        return {}
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    }
}
</script>

<style scoped lang="sass">
*
    font-family: Roboto Condensed

.catalog-item
    background: #fff
    box-shadow: 0 0 8px 0
    border-radius: 15px
    display: flex
    justify-content: center
    flex-direction: column
    width: 700px
    // margin-bottom: 50px
    margin: 50px
    transition: all 0.3s ease 0s
    &:hover
        // border: 3px solid #00B2A0
        outline: 3px solid #00B2A0
    &__wrapper-text
        padding-top: 50px
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column
        padding-right: 100px
    &__wrapper
        display: flex
        justify-content: space-between
        img
            height: 100%
            width: 470px
    &__button-wrapper
        text-align: center
        padding: 50px 0 50px 0
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
        
</style>