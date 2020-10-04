<template>
  <Layout>
    <div class="container contact-container">
      <div class="contact-header">
        <h1 class="contact-title">Uh.. 404?</h1>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: '404'
    }
  }
}
</script>

<style scoped>
.contact-container {
  max-width: 960px !important;
}
.contact-header {
  /*padding: 2rem 0 4rem 0;*/
  padding: 20vh 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
</style>
