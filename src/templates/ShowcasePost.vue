<template>
  <Layout>
    <div class="showcase">
      <div class="container showcase-container">
        <div class="showcase-header">
          <h1 v-html="$page.post.title" class="showcase-title" />
          <div class="showcase-meta">
            <div class="showcase-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"/>
            </div>
            <div class="showcase-time">
              <span class="label">Time</span>
              <span>{{ $page.post.timeToRead }} min read</span>
            </div>
          </div>          
        </div>
        <ShowcaseContent :content="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ShowcasePost ($path: String!) {
  post: showcasePost (path: $path) {
    title
    date (format: "D MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import ShowcaseContent from "@/components/ShowcaseContent"

export default {
  components: {
    ShowcaseContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  },
  mounted () {
    import('medium-zoom').then(mediumZoom => {
      this.zoom = mediumZoom.default('.container p > img')
    })
  }
}
</script>

<style scoped>
.showcase-container {
  max-width: 960px;
}
.showcase-header {
  /*padding: 2rem 0 4rem 0;*/
  padding: 20vh 0 4rem 0;
}
.showcase-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.showcase-meta {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.showcase-meta > div {
  margin-right: 4rem;
}
.showcase-meta > div:last-of-type {
  margin: 0;
}
</style>
