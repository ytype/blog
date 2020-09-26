<template>
  <div class="main">
    <hr
      class="top first"
      style="margin-left: 15%;"
    >
    <g-image
      alt="Author image"
      class="author-image"
      src="~/assets/images/logo-square.png"
    />
    <hr
      class="top second"
    >
    <div class="content has-text-centered">
      <p>A baseline Gridsome starter to get you going with Bulma.</p>
    </div>
    <hr class="bottom">
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: inline-block;
  width: calc((70% - 100px)/2);
  vertical-align: middle;
  border: 1px solid #202020;
}
.bottom {
  margin-left: 15%;
  display: inline-block;
  width: 70%;
  vertical-align: middle;
  border: 1px solid #202020;
}
.content {
  width: 70%;
  margin-left: 15%;
}
.author-image {
  border-radius: 100%;
  display: inline;
  vertical-align: middle;
  width: 20%;
  max-width: 100px;
  height: auto;
}

@media only screen and (max-width: 500px) {
  .author-image {
    display: none;
  }
  .first {
    margin-left: 15%;
  display: inline-block;
  width: 70%;
  vertical-align: middle;
  border: 1px solid #202020;
  }
  .second {
    display: none;
  }
}
</style>
