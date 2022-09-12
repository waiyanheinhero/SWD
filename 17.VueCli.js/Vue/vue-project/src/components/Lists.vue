<template>
  <div>
      <li class="list-group-item">
        {{listTest}}
        <button class="btn btn-secondary" @click="torun()">ClickMe</button>
      </li>
      
  </div>
</template>

<script>
    export default {
      props: ["listTest","currentIndex"],
      methods:{
        torun(){
          this.$emit("toParent",`I am a ${this.listTest}`,this.currentIndex)
        }
      }
      
    }
</script>

<style>

</style>