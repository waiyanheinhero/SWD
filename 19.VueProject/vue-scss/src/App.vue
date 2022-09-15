<template>
  <div>
    <Navbar></Navbar>
    <div class=" container-fluid">
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HelloWorld from './components/HelloWorld.vue';

  export default {
    components: { Navbar, HelloWorld }
}
</script>

<style lang="scss">
$primary: #482ff7;
$font-family-sans-serif: 'Roboto Slab', serif;
$navbar-nav-link-padding-x: 1.5rem;
@import "~bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;800&display=swap');


</style>