<template>
  <div>
      {{ post.title }}
      {{ post.body }}
  </div>  
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    },
  } 
}
</script>

<style>

</style>