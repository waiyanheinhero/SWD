<template>
    <div>
        <h1>
          {{postTitle}}
          <span class="badge rounded-pill text-bg-primary">{{badgeTitle}}</span>
        </h1>
    </div>
</template>

<script>
  export default {
    props: {
      postTitle: {
        type: String,
        required: true,
        default: "This is title"
      },
      badgeTitle: {
        type: Number
      }
    },
    data() {
      return {
          name: "Title Ronaldo",
      }
    },
  }
</script>

<style>

</style>