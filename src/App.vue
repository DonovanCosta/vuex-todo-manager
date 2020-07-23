<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'
export default {
  name: 'App',
  components: {
      Navbar
  }
}
</script>

<style>
    /* body {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        line-height: 1.6;
        background: #e8f7f0;
    } */

    /* .container {
        max-width: 1100px;
        margin:auto;
        overflow: auto;
        padding: 0 2rem;
    } */
</style>
