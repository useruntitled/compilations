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
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
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
                preLoad: 1.3,
                attempt: 1,
                loading: '/preloader.png',
                // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
                listenEvents: [ 'scroll' ]
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
        color: '#d4620b',
    },
});
