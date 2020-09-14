<template>
  <div class="layout">
    <Header />
    <slot/>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: 'Open Sans', sans-serif;
  margin:0;
  padding: 0;
  font-size: 1.15rem;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

body.dark {
  --color-base: rgb(28, 28, 28);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}

h1 {
  letter-spacing: -0.01em;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

h3 {
  font-weight: 700;
}

p {
  font-size: 1.15rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 2rem;
}
.layout {
  padding: 0;
}

a {
  font-weight: 700;
  text-decoration: none;
}

ul {
  line-height: 2rem;
}

.layout.sticky-header {
  padding: 6rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

a {
  color: inherit;
}

img {
  max-width: 100%;
/*  box-shadow: 0px 0px 39px 0px rgba(0,0,0,0.10); */
  margin: 2rem 0;
}

.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
