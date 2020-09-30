<template>
  <div id="app">
    <navbar />
    <main class="section">
      <slot />
    </main>

    <footer class="footer has-text-centered">
      <span>Copyright © {{ new Date().getFullYear() }}. </span>
      <span>Powered by <a href="//gridsome.org"> Gridsome </a></span>
    </footer>
  </div>
</template>

<script>
import navbar from '~/components/Navbar.vue'

export default {
  components: {
    navbar
  },
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    showNav: false
  })
}
</script>
