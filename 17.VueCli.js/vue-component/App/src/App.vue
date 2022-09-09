<!--<template>-->
<!--  <div class="p-3">-->
<!--      <Title/>-->
<!--      <ul class="list-group">-->
<!--        <List></List>-->
<!--        <List></List>-->
<!--      </ul>-->
<!--    <ul class="list-group">-->
<!--      <List></List>-->
<!--      <List></List>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import Title from "./components/Title.vue";-->
<!--  import List from "./components/Lists.vue";-->
<!--  export default {-->
<!--      components: {-->
<!--         Title,-->
<!--         List-->
<!--      }-->
<!--  }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->

<template>
  <div class="p-3 m-3">
      <Title post-title="Fruit" :badge-title="12"></Title>
      <ul class="list-group">
        <lists></lists>
        <lists list-test="apple"></lists>
        <lists list-test="mango"></lists>
      </ul>

  </div>
</template>

<script>
  import Title from "./components/Title.vue";
  import Lists from "./components/Lists.vue";

  export default {
    components: {Lists, Title}
  }
</script>

<style>

</style>