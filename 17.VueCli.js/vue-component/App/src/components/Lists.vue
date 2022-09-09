<!--<template>-->
<!--    <div>-->
<!--        <li class="list-group-item" @dblclick="edits()">-->
<!--            <input type="text" v-if="isEdit" v-model="list" @keyup.enter="saveText()">-->
<!--            <span v-else>{{list}}</span> -->
<!--        </li>       -->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                list: "",-->
<!--                isEdit: true,-->
<!--            }-->
<!--        },-->
<!--        computed: {-->
<!--            name() {-->
<!--                return this.data -->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            saveText(){-->
<!--                return this.isEdit = false;-->
<!--            },-->
<!--            edits(){-->
<!--                return this.isEdit = true;-->
<!--            }-->
<!--        },-->
<!--       -->
<!--    }-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->

<template>
  <div>
      <li class="list-group-item">{{listTest}}</li>
  </div>
</template>

<script>
    export default {
      props: ["listTest"],
      data() {
        return {
          list: "Ronaldo"
        }
      },
    }
</script>

<style>

</style>