<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;1,300&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;1,100&display=swap"
        rel="stylesheet">
    <mainContainer/>
  </div>
</template>

<script>

import mainContainer from "./components/main-container.vue";

export default {
  name: 'app',
  components: {mainContainer}
}
</script>

<style lang="sass">

</style>