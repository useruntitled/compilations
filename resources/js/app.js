import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createI18n } from 'vue-i18n'
import { createInertiaApp,Head,Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import VueLazyLoad from 'vue-lazyload';

import Base from './Pages/shared/base.vue';

import Csrf from './Pages/shared/csrf.vue';

import NavLink from './Pages/shared/navLink.vue';

// import NavLink from './Pages/shared/navLink.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';


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
    }
  }
})

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(VueLazyLoad, {
                adapter: {
                  loading (listener, Init) {
                    
                  }
                },
                attempt: 3,
                loading: '/preloader.png',
                // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
            })
            .use(i18n)
            .component('Head',Head)
            .component('Link',Link)
            .component('Base',Base)
            .component('Csrf',Csrf)
            .component('NavLink',NavLink)
            
            .mount(el)
    },
    
    progress: {
        delay: 200,
        color: '#d4620b',
    },
});
