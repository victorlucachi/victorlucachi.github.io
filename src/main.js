import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"
import "@/assets/style.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };

  head.link.push({
    rel: 'stylesheet',
    href: 'link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
  });

  head.meta.push(
    {
      key: 'keywords',
      name: 'keywords',
      content: 'product design'
    },
    {
      name: 'author',
      content: 'victorlucachi.ro'
    }
  )
}
