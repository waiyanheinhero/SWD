<template>
  <div>
    <li v-for="fruit in fruits" :key="fruit">
      {{fruit}}
    </li>
    <p>Total job: {{$store.getters.jobTotal}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
  export default {
    computed: mapState(
      ["fruits"]
    )
  }
</script>

<style lang="scss" scoped>

</style>