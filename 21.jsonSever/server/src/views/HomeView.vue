<template>
  <div class="home">
    <h2>{{title}}</h2>
    <p>{{description}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      title: "loading...",
      description: ""
    }
  },
 
  methods: {
    getData(){

      }
    },  
    mounted() {
      axios.get('http://localhost:3000/posts')
      .then(function (response) {
        console.log(response.data);
        this.title = response.data.title;
      });
  
    }
  }


</script>
