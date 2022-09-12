<template>
  <li :class="['list-group-item d-flex justify-content-between created',{'deleted': isDelete}]">
    <input type="text" class="form-control" v-if="isEdit == true" v-model="list.message" @keyup.enter="isEdit = false">
    <div v-else class=" custom-control custom-checkbox">
      <input class="custom-control-input" type="checkbox" v-model="list.isDone">
      <label :class="['custom-control-label',{'done': list.isDone}]" for="" @dblclick="isEdit = true">{{list.message}}</label>
    </div>
    <i class=" fas fa-trash-alt text-primary" @click="[isDelete = true,del(list.id)]"></i>
  </li>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      // type: "Object",
      required: true
    }
  },
  data() {
    return {
      isEdit: false,
      isDelete: false,
    }
  },
  methods: {
    del(x) {
       this.$emit("del",x)
    }
  },
}
</script>

<style scoped>

</style>