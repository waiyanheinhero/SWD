<template>
  <div class=" border border-primary p-5 rounded-3">
    <img src="./assets/logo.svg" class="w-25 " alt="">
      <h2 class=" text-primary">{{title}}</h2>
      <i class="fas fa-house fa-4x"></i> <HelloWorld />
      <p class="my-color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maiores cum dolorum ullam aperiam dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, maiores cum dolorum ullam aperiam dolores.

      </p>
      <h3>Total: {{total}}</h3>
      <input type="text" class="form-control" v-model="message" @keyup.enter="run()">
      <ul class="list-group">
        <li class="list-group-item" v-for="list in lists" :key="list">{{list}}</li>
      </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"
export default {
    data() {
        return {
            title: "Vue Cli",
            message: "",
            lists: [],
        };
    },
    methods: {
        run() {
            this.lists.push(this.message);
            this.message = "";
        },
    },
    computed: {
        total() {
            return this.lists.length;
        }
    },
    components: { HelloWorld }
}
</script>

<style>
 

</style>