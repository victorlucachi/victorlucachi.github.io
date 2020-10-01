<template>
  <Layout>
    <div class="container contact-container">
      <div class="contact-header">
        <h1 class="contact-title">Hey, hello you!</h1>
        <p>Leave me a note with any questions that you might have, I'll get back to you as soon as possible. Thanks!</p>
      </div>
      <form class="contact-form" action="https://getform.io/f/a73c8e9e-36ca-437a-b4e0-1f74af84f785" method="POST" name="contact">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Your email address</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit" class="button">Submit</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Hello'
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
</style>

