<template>
  <div>
    <ul v-for="(post, index) in posts" :key="index">
      <li>
        <post-details :post="post" :posts="posts"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { postsService} from '../services/posts-service'
import PostDetails from './PostDetails.vue'

export default {
  components: {
    PostDetails
  },
  data() {
    return {
      posts: []
    }
  },

  created() {
    postsService.getPosts()
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
