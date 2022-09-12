<template>
  <div class="row form mb-3">
    <div class="col-10">
      <input type="text" class=" form-control" v-model="newtext">
    </div>
    <div class="col-2">
      <button class="btn btn-primary" @click="run()">
        <i class="fa-solid fa-plus-circle"></i>
      </button>
    </div>
  </div>
  <div>
    <small v-if="showError" class="text-danger">{{errorMessage}}</small>
  </div>
</template>

<script>
export default {
  name: "ListCreate",
  data() {
    return {
      newtext: "",
      showError: false,
      errorMessage: ""
    }
  },
  methods: {
    run() {
      if(this.newtext.length){
        this.showError = false,
        this.$emit("create",this.newtext),
        this.newtext = "";
      }else {
        this.showError = true,
        this.errorMessage = "No Empty"
      }
    }
  },
}
</script>

<style scoped>

</style>