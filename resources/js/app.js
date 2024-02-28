import './bootstrap';
import '../css/app.css';

import {createApp, createSSRApp, h} from 'vue'
import { createI18n } from 'vue-i18n'
import { createInertiaApp,Head,Link } from '@inertiajs/vue3';
import {ZiggyVue} from 'ziggy-js';
import VueLazyLoad from 'vue-lazyload';
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";



const appName = import.meta.env.VITE_APP_NAME || 'fcbc';


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
  locale: 'ru',
  // the custom rules here ...
  pluralizationRules: {
    ru: customRule
  },
  messages: {
    ru: {
      car: '0 машин | {n} машина | {n} машины | {n} машин',
      banana: 'нет бананов | {n} банан | {n} банана | {n} бананов',
      answer: '0 ответов | {n} ответ | {n} ответа | {n} ответов',
      comment: '0 комментариев | {n} комментарий | {n} комментария | {n} комментариев',
      user: '0 пользователей | {n} пользователь | {n} пользователя | {n} пользователя',
      film: '0 фильмов | {n} фильм | {n} фильма | {n} фильмов',
      view: '0 показов | {n} показ | {n} показа | {n} показов',
      visit: '0 открытий | {n} открытие | {n} открытия | {n} открытий',
    }
  }
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue)
            .use(VueLazyLoad, {
                attempt: 3,
                loading: '/preloader.png',
                // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
            })
            .use(i18n)
            .component('Head',Head)
            .component('Link',Link)

            .mount(el)
    },

    progress: {
        color: '#d4620b',
    },
});
