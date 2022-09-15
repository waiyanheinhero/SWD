<template>
  <div class="p-3 m-3">
      <Title post-title="Fruit" :badge-title="12"></Title>
      <ul class="list-group">
          <lists v-for="(fruit,index) in fruits" :key="fruit" :listTest="fruit" :current-index="index" @toParent="run"></lists>
      </ul>

  </div>
</template>

<script>
  import Title from "./components/Title.vue";
  import Lists from "./components/Lists.vue";

  export default {
    components: {Lists, Title},
    data() {
      return {
          fruits: ["apple","orange","mango"]
      }
    },
    methods: {
        run(x,y){
          this.fruits.splice(y,1)
         return console.log(x,y)
        }
      }
  }
</script>

<style>

</style>