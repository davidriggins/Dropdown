import { createApp } from "vue";
import { createPinia } from "pinia";
import { sortBy } from "lodash";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import "./assets/styles/project.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
