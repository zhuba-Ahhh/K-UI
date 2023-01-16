import { createApp } from "vue";
import App from "./App.vue";

import Icon from "@k-ui/components/icon";
import "@k-ui/theme-chalk/src/index.scss";

const app = createApp(App);
const plugins = [Icon];

plugins.forEach((plugin) => {
  app.use(plugin);
});

app.mount("#app");
