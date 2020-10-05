<template>
  <Layout>
    <div class="container fourohfour-container">
      <div class="fourohfour-header">
        <h1 class="fourohfour-title">Uh.. 404?</h1>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'This aint it.'
    }
  }
}
</script>

<style scoped>
.fourohfour-container {
  max-width: 960px !important;
}
.fourohfour-header {
  /*padding: 2rem 0 4rem 0;*/
  padding: 20vh 0 4rem 0;
}
.fourohfour-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
</style>
