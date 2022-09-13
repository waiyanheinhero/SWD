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

  export default {
    components: { Navbar }
}
</script>

<style lang="scss">
$primary: #482ff7;

$navbar-nav-link-padding-x: 1.5rem;
@import "~bootstrap/scss/bootstrap"



</style>