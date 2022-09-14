<template>
  <div>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
  
    computed: mapState({
      name: state => state.name,
    }),
  }
</script>

<style lang="scss" scoped>

</style>