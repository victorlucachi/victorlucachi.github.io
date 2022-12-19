<template>
  <Layout>
    <div class="container contact-container">
      <div class="contact-header">
        <h1 class="contact-title">Hey, hello you!</h1>
        <p>First of all let me thank you for dropping by. Whatever it is that brought you here, thanks for the interest, I highly appreciate it!</p>
        <p>I'm working on creating a Discord server to make it easier for us to provide support and connect with our community. I'll be sure to add the necessary links to our GitHub repositories so you can find them easily. Please stay tuned for more updates.</p>
      </div>
    </div>
  </Layout>
</template>

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
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 2rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-contrast);
  outline: none;
  border-radius: 0.2rem;
  padding: 1rem 1rem;
  color: inherit;
  font-size: 1.15rem;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
}
textarea {
  resize: none;
  height: 240px;
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

.label {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
}

@media (max-width: 860px) {
  .sender-info {
    flex-direction: column;
  }

  .sender-info > div {
    margin-right: 0;
    margin-top: 1rem;
  }
}
</style>
