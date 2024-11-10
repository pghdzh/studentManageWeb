import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/reset.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import locale from "element-plus/es/locale/lang/zh-cn";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

export const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus, { locale });
app.use(router);
app.use(pinia);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
