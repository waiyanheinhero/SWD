<template>
  <div>
      <h2>Create</h2>
      <input type="text" pattern="post title" v-model="title">
      <br>
      <br>
      <textarea name="" id="" cols="30" rows="10" v-model="description"></textarea>
      <br>
      <button @click="add()">Add Post</button>
  </div>
</template>

<script>

import axios from "axios";

  export default {
  
    name: "About",
    data() {
      return {
        title: "" ,
        description: "" ,
      }
    },
    methods: {
      add() {
        let newPost = {
          title : this.title,
          description: this.description
        };
        console.log(newPost)
        axios.post("http://localhost:3000/posts",newPost)
          
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
