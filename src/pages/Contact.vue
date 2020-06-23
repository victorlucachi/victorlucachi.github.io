<template>
  <Layout>
    <div class="container contact-container">
      <div class="contact-header">
        <h1 class="contact-title">Hey, hello you!</h1>
        <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
      </div>
      <form class="contact-form" action="https://getform.io/f/a73c8e9e-36ca-437a-b4e0-1f74af84f785" method="POST" name="contact">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message"></textarea>
        </div>
        <button tyepe="submit" class="button">Submit form</button>
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
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

