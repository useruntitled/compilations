import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
import { ZiggyVue } from "ziggy-js";
import { createI18n } from "vue-i18n";
import "vue-lazyload";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function customRule(choice, choicesLength, orgRule) {
  if (choice === 0) {
    return 0;
  }
  const teen = choice > 10 && choice < 20;
  if (!teen) {
    if (choice % 10 === 1) {
      return 1;
    } else if (choice % 10 >= 2 && choice % 10 <= 4) {
      return 2;
    }
  }
  if (choicesLength < 4) {
    return 2;
  }
  return 3;
}
const i18n = createI18n({
  locale: "ru",
  // the custom rules here ...
  pluralizationRules: {
    ru: customRule
  },
  messages: {
    ru: {
      car: "0 машин | {n} машина | {n} машины | {n} машин",
      banana: "нет бананов | {n} банан | {n} банана | {n} бананов",
      answer: "0 ответов | {n} ответ | {n} ответа | {n} ответов",
      comment: "0 комментариев | {n} комментарий | {n} комментария | {n} комментариев",
      user: "0 пользователей | {n} пользователь | {n} пользователя | {n} пользователя",
      film: "0 фильмов | {n} фильм | {n} фильма | {n} фильмов",
      view: "0 показов | {n} показ | {n} показа | {n} показов",
      visit: "0 открытий | {n} открытие | {n} открытия | {n} открытий"
    }
  }
});
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Account.vue": () => import("./assets/Account-4df2a625.js"), "./Pages/Admin/Admins.vue": () => import("./assets/Admins-5df8dd6c.js"), "./Pages/Admin/Film.vue": () => import("./assets/Film-450e3808.js"), "./Pages/Admin/Films.vue": () => import("./assets/Films-5aa82070.js"), "./Pages/Admin/Genre.vue": () => import("./assets/Genre-1655aa7f.js"), "./Pages/Admin/Genres.vue": () => import("./assets/Genres-24302e8e.js"), "./Pages/Admin/Index.vue": () => import("./assets/Index-d89c8089.js"), "./Pages/Admin/Moders.vue": () => import("./assets/Moders-297d4046.js"), "./Pages/Admin/Object.vue": () => import("./assets/Object-b6ab1a2f.js"), "./Pages/Admin/ObjectCreator.vue": () => import("./assets/ObjectCreator-0a09cd7b.js"), "./Pages/Admin/Posts.vue": () => import("./assets/Posts-f0e5ee97.js"), "./Pages/Admin/Tags.vue": () => import("./assets/Tags-c9209456.js"), "./Pages/Admin/Users.vue": () => import("./assets/Users-d85120f1.js"), "./Pages/Auth/Bookmarks.vue": () => import("./assets/Bookmarks-9b45986a.js"), "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-1ca20398.js"), "./Pages/Auth/Drafts.vue": () => import("./assets/Drafts-2bf9c890.js"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-52d84c78.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-88bd8276.js"), "./Pages/Auth/Notifications.vue": () => import("./assets/Notifications-8a1b88f6.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-d9dae054.js"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-d99a55d3.js"), "./Pages/Auth/Settings/Index.vue": () => import("./assets/Index-1e2bc1c9.js"), "./Pages/Auth/Settings/Profile.vue": () => import("./assets/Profile-6d8f073f.js"), "./Pages/Auth/Settings/SettingsLayout.vue": () => import("./assets/SettingsLayout-211519c8.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-d67577bc.js"), "./Pages/Banned.vue": () => import("./assets/Banned-84d2cf9b.js"), "./Pages/Home/Index.vue": () => import("./assets/Index-92dbf9f6.js"), "./Pages/Home/New.vue": () => import("./assets/New-45717a56.js"), "./Pages/Karma/Forbidden.vue": () => import("./assets/Forbidden-98edce0c.js"), "./Pages/Profile/Comments.vue": () => import("./assets/Comments-1df452c4.js"), "./Pages/Profile/Index.vue": () => import("./assets/Index-96a6548b.js"), "./Pages/Search.vue": () => import("./assets/Search-0341d416.js"), "./Pages/Tag.vue": () => import("./assets/Tag-b089d966.js"), "./Pages/post.vue": () => import("./assets/post-1e1ab2da.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin).use(ZiggyVue, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).use(i18n).component("Head", Head).component("Link", Link);
    }
  })
);
