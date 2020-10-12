<template>
  <Layout>
    <div class="container showcase-container">
      <div class="showcase-header">
        <h1 v-html="$page.post.title" class="showcase-title" />
          <div class="showcase-meta">
            <div class="showcase-date">
              <span class="label">Date</span>
              <div v-text="$page.post.date"/>
            </div>
          </div> 
        <ShowcaseContent :content="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
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
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  mounted () {
    import('medium-zoom').then(mediumZoom => {
      this.zoom = mediumZoom.default('.container p > img');
  })
  }
};
</script>

<style>
.showcase-container {
  max-width: 960px !important;
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

.sender-info {
  display: flex;
  flex-wrap: wrap;
}

.sender-info > div {
  flex: 1;
  margin-right: 2rem;
}

.contact-form {
  margin: 4rem 0;
}

input:focus,textarea:focus {
  border: 1px solid var(--color-contrast);
}

input,textarea,select {
  background: transparent;
  border: 1px solid var(--color-contrast-1);
  outline: none;
  border-radius: 0.2rem;
  padding: 1rem 1rem;
  color: inherit;
  font-size: 1.15rem;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
}

.button {
  background: var(--color-base);
  border: 1px solid var(--color-contrast);
  font-size: 1.15rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  letter-spacing: 0.035em;
}

.button:hover {
  background: var(--color-contrast-1);
  color: var(--color-base-1);
}

.button:focus {
  border: 1px solid var(--color-base-1);
}

.form-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  display: block;
  margin-bottom: 0.5rem;
}

.dropdown-container select { 
  -moz-appearance: none; 
  -webkit-appearance: none; 
} 
  
.dropdown-container select::-ms-expand { 
  display: none; 
}

.no-margin > h5 {
  margin: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
}

.grid-container p img {
  margin: 0;
}

.grid-item {
  margin: 0 0.5rem;
}

@media (max-width: 860px) {
  .sender-info {
    flex-direction: column;
  }

  .sender-info > div {
    margin-right: 0;
    margin-top: 1rem;
  }
  
  .split {
    flex-direction: column;
  }

  .col-left {
    width: 100%;
  }

  .col-right {
    width: 100%;
    margin: 0;
  }

  .contact-form {
    margin: 0;
  }

  .grid-container {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
}
</style>
