<template>
  <div class=" container p-5">
    <div class=" row d-flex justify-content-center">
      <div class=" col-12 col-md-4">
        <div class="">
          <Title title="Vue ToDo App"></Title>

          <list-create @create="run"></list-create>

          <div class=" d-flex justify-content-between">
            <p class="mb-0 fw-bolder">Job List{{lists.length > 1 ? "s": ""}}</p>
            <p v-if="lists.length>0 && doneTotal == lists.length" class=" text-bg-success">
              All Done<i class=" fas fa-check-circle"></i>
            </p>
            <p v-else="" class=" text-bg-danger">
              Done:{{doneTotal}}
            </p>
          </div>

          <ul class=" list-group">
              <List v-for="list in lists" :key="list.id" :list="list" @del="del"></List>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import List from "./components/List.vue";
import ListCreate from "./components/ListCreate.vue";
export default {
  components: {ListCreate, List, Title},
  data() {
    return {
      currentId: 0,
      lists: []
    }
  },
  computed:{
    doneTotal(){
      return this.lists.filter((el)=>el.isDone === true).length
    }
  },

  methods: {
    run(x) {
      this.currentId++,
          this.lists.push({
            id: this.currentId,
            message: x,
            isDone: false,

          })

    },
    del(x){
      // if(confirm("Are you sure delete")){

      // }
      setTimeout(()=>this.lists = this.lists.filter((el)=>el.id !== x),600)

    }
  },
}
</script>

<style>

.done{
  text-decoration: line-through;
  animation: 0.5s bounceIn;
}
.created{
  animation: 0.5s fadeInDown;
}
.deleted{
  animation: 0.5s fadeOutLeft;
}

</style>