import { createApp } from "vue";
import App from "./App.vue";
import "../style.css";
import { createWebHistory, createRouter } from "vue-router";
import MoviesView from "./views/MoviesView.vue";
import MovieDetail from "./views/MovieDetail.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  { path: "/", component: MoviesView },
  { path: "/movie/:movieId", name: "movieDetail", component: MovieDetail },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
