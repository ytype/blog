<template>
  <b-navbar class="navbar">
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <g-image
          alt="logo image"
          class="logo-image"
          src="~/assets/images/logo-text.png"
        />
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <b-navbar-item
          class="navbar-item"
          href="#"
        >
          About
        </b-navbar-item>

        <b-navbar-item
          class="navbar-item"
          href="#"
        >
          Categories
        </b-navbar-item>

        <b-navbar-item
          class="navbar-item"
          href="/tags"
        >
          Tags
        </b-navbar-item>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>2

<script lang="ts">
// Example : https://codepen.io/Sukhjinder-arora/pen/OZGomv
</script>

<style lang="scss" scoped>
$background-color : #373737;
.navbar {
  background-color: $background-color;
}
.navbar-item {
  color: white;
}
.navbar-end {
  margin-right: 10px;
}
.logo-image {
  width: 80px;
  margin-left: 10px;
}
// eslint-disable-next-line max-len
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active {
    background-color: #fafafa;
    color: black;
}


@media (max-width: 1023px) {
  .navbar-item {
    a {
      color: black;
    }
  }
  .navbar-burger {
    color: white;
  }
}
</style>
