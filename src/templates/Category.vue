<template>
  <Layout>
    <h1 class="title is-size-1 has-text-centered">
      # {{ $page.category.title }}
    </h1>

    <div class="posts">
      <PostCard
        v-for="edge in $page.category.belongsTo.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Category($id: ID!) {
  category(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            title
            path
            date(format: "D. MMMM YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
