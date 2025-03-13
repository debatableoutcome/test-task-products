import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#1867C0",
            secondary: "#5CBBF6",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
