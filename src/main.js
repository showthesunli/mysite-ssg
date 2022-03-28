import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "/src/routes/routes.js";
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(ElementPlus)
  }
);



