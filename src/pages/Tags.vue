<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <p
        v-for="edge in $page.allTag.edges"
        :key="edge.node.id"
      >
        {{ edge.node.id }}
      </p>
    </div>
  </Layout>
</template>

<page-query>
query {
  allCategory {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>
