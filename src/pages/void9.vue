<template>
  <Layout>
    <div class="container showcase-container">
      <div class="showcase-header">
        <h1 class="showcase-title">VOID9 Macropad</h1>

        <img src="/uploads/void9/void9_falling.png/" alt="">

        <h2>What the VOID9 is</h2>

        <p>  
        The VOID9 is, as the name implies, a 9 key programmable macropad; it has a tiny footprint but it's powered by the incredibly powerful and versatile <a href="https://qmk.fm/" target="_blank">QMK Firmware</a>.</p>
        
        It features a 3x3 grid of keys that are mounted on a 3d printed, hand sanded to a smooth finish plate/case, soldered on a high quality custom PCB and powered by a Pro Micro that is running the QMK Firmware.</p>
        
        The macropad is fully programmable thanks to  <a href="https://caniusevia.com/" target="_blank">VIA Configurator</a>, and its intuitive easy to use GUI; we will provide links to the QMK Documentation as well as assistance, if needed, for anyone that has issues with configuring the macropad according to their own needs.
        </p>

        <h2>What the VOID9 isn't</h2>
        <p>All things considered, the VOID9 can do almost anything; you can program powerful macros, use different layers that give you access to more than the nine physical keys, and to expand on that you can also use <a href="" target="_blank">AutoHotKey</a> for even more functionality!</p>

        <img src="/uploads/void9/pcb/void9_pcb_2.jpg/" alt="">

        <h2>What the future holds</h2>
        <p>If there's any hardware features that you'd like to see implemented, such as LEDs or a piezo buzzer, rotary encoder support, or anything else that crosses your mind, I'm here to listen; head over to the <a href="https://victorlucachi.ro/contact" target="_blank">contact page</a> and leave me a note with what your thoughts are.</p>
        
        <h2>How to get one</h2>
        <p>If you're interested in buying a VOID9, sign up below and I will notify you when the macropads are live for sale. And while we get things moving, parts ordered and cases printed, I'm keen to see what colours you want your VOID9 to come in!</p>

        <p>Expected price for the VOID9 is around 49 Euro, with an additional 15 Euro in shipping*.</p>
  
        <form class="contact-form" action="https://getform.io/f/a73c8e9e-36ca-437a-b4e0-1f74af84f785" method="POST" name="contact">
        <div class="sender-info">
          <div>
            <label for="email" class="label">Your email address</label>
            <input type="email" name="email"/>
          </div>
          <div class="dropdown-container">
            <label for="color" class="label">Preferred color</label>
            <select name = "dropdown">
              <option value = "" selected>Choose an option</option>
              <option value = "White Marble">White Marble</option>
              <option value = "Grey Marble">Grey Marble</option>
              <option value = "Atomic Yellow">Atomic Yellow</option>
              <option value = "Pistachio Green">Pistachio Green</option>
            </select>
          </div>
          <button type="submit" class="button">Sign up</button>
        </div>
        </form>

        <p class="notice">
        * Shipping via GLS to mainland Europe (and the UK), except for Andorra, Ceuta, Cyprus, Switzerland, Gibraltar, Greece, Livigno, Malta, Melilla, San Marino, Norway, Serbia, Turkey and all European islands.
        <br>** Due to the manufacturing process some variation as well as some slight imperfections are to be expected, as each and every one of these macropads is hand made and unique in its own way.
        </p>

      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'VOID9 Macropad'
    }
  }
}

</script>

<style scoped>
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

h2 {
  margin: 4rem 0 2rem 0;
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

.label {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
}

.notice {
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5rem;
}

.dropdown-container select { 
  -moz-appearance: none; 
  -webkit-appearance: none; 
} 
  
.dropdown-container select::-ms-expand { 
  display: none; 
}

@media (max-width: 860px) {
  .sender-info {
    flex-direction: column;
  }

  .sender-info > div {
    margin-right: 0;
    margin-top: 1rem;
  }

  .dropdown-container {

  }
}
</style>
