<template>
  <div class="p-3">
      <Title/>
      <ul class="list-group">
        <List></List>
        <List></List>
      </ul>
  </div>
</template>

<script>
  import Title from "./components/Title.vue";
  import List from "./components/List.vue";
  export default {
      components: {
         Title,
         List
      }
  }
</script>

<style lang="scss" scoped>

</style>