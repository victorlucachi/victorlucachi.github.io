---
thumbnail: "/uploads/void-9.jpg"
title: VOID9 Macropad
date: 2020-10-04
project_bg_color: ''
project_fg_color: ''

---

![](/uploads/void9/void9_falling.png)

## What the VOID9 is
The VOID9 is, as the name implies, a 9 key programmable macropad; it has a tiny footprint but it's powered by the incredibly powerful and versatile [QMK Firmware](https://qmk.fm/).
        
It features a 3x3 grid of keys that are mounted on a 3d printed, hand sanded to a smooth finish plate/case, soldered on a high quality custom PCB and powered by a Pro Micro that is running the QMK Firmware.

Every VOID9 will come assembled, with keycaps included, flashed and ready to use out of the box (micro usb cable not provided).

![](/uploads/void9/pcb/void9_pcb_2.jpg)

## What the VOID9 isn't
The biggest drawback of the VOID9 is the limited number of keys, but it quickly makes up for that in cuteness.

All things considered, the VOID9 can do almost anything: powerful macros can be programmed, different layers (think FN keys) can be defined that give the user access to more than the nine physical keys, and to expand on that [AutoHotKey](AutoHotKey) can be used for even more functionality!

## VIA Configurator support
<div class="split">
<div class="col-left">

The macropad is fully programmable thanks to  [VIA Configurator](https://caniusevia.com/), and its intuitive, easy to use GUI; I will provide links to the [QMK Documentation](https://beta.docs.qmk.fm/) as well as assistance, if needed, to anyone that has issues with configuring the macropad according to their own needs.

Due to the fact that the VOID9 is not officially supported by VIA, for the time being the macropad is detected thanks to a json definitions file, that has to be loaded every time the user wants to make changes to the keymap. Once the file is loaded the macropad can be plugged in and the keymap can be customized. 

</div>
<div class="col-right">

![](/uploads/void9/via_configurator1.png)

![](/uploads/void9/via_configurator.png)

</div>
</div>

## What the future holds
If there's any hardware features that you'd like to see implemented, such as LEDs or a piezo buzzer, rotary encoder support, or anything else that crosses your mind, I'm here to listen; head over to the [contact page](https://victorlucachi.ro/contact) and leave me a note with what your thoughts are.
        
## How to get one
If you're interested in buying a VOID9, sign up below and I will notify you when the macropads are live for sale. And while we get things moving, parts ordered and cases printed, I'm keen to see what colours you want your VOID9 to come in!

The expected price for the VOID9 is around 50-60 Euro, with an additional 15 Euro in shipping*.

If you're not interested in buying one of my macropads, you have a 3d printer and you're up for a little bit of DIY, all of the models present on this website can be downloaded from [Github](https://github.com/victorlucachi) or [Thingiverse](https://www.thingiverse.com/v0ld/designs).

I would like to take a moment to say thank you if you've made it so far. I really appreciate the interest that you've taken either in the VOID9 or in any of my work.

## Sign up for notifications

<form name="getform" class="contact-form" action="https://getform.io/f/a73c8e9e-36ca-437a-b4e0-1f74af84f785" method="POST">
    <div class="sender-info">
    <div>
        <label for="email" class="form-label">Your email address</label>
        <input type="email" name="email" required/>
    </div>
    <div class="dropdown-container">
        <label for="color" class="form-label">Preferred color</label>
        <select name="dropdown" onchange="if (this.options[this.selectedIndex].value =='Other'){document.getform['Other'].style.visibility='visible'}else {document.getform['Other'].style.visibility='hidden'};" required>
            <option value="" selected>Choose an option</option>
            <option value="White Marble">White Marble</option>
            <option value="Grey Marble">Grey Marble</option>
            <option value="Atomic Yellow">Atomic Yellow</option>
            <option value="Pistachio Green">Pistachio Green</option>
            <option value="Other">Other</option>
        </select>
    </div>
        <button type="submit" class="button">Sign up</button>
    </div>
    <label for="other color" class="form-label" style="visibility:hidden;">Other color</label>
    <input type="text" name="Other" style="visibility:hidden;" placeholder="Color of choice"/>
</form>

##### *Shipping via GLS to mainland Europe (and the UK), except for Andorra, Ceuta, Cyprus, Switzerland, Gibraltar, Greece, Livigno, Malta, Melilla, San Marino, Norway, Serbia, Turkey and all European islands.

##### **Due to the manufacturing process some variation as well as some slight imperfections are to be expected, as each and every one of these macropads is hand made and unique in its own way.