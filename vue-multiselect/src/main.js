import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

import "./assets/styles/project.css";

const app = createApp(App);

app.use(createPinia());
app.component("EasyDataTable".Vue3EasyDataTable);
app.use(router);

app.mount("#app");
