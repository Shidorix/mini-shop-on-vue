import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
    stoimost: 0,
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    STOIMOST(state) {
      return state.stoimost
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },

    // STOIMOST

    SET_STOIMOST (state, product) {
      state.stoimost += product.price
    },
    DELETE_STOIMOST (state, index) {
      state.stoimost -= state.cart[index].price
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error);
          return error
        })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
    
    // STOIMOST

    SET_STOIMOST({commit}, product) {
      commit('SET_STOIMOST', product)
    },
    DELETE_STOIMOST({commit}, index) {
      commit('DELETE_STOIMOST', index)
    }
    
  },
  modules: {
  }
})
