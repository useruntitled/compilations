import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp,Head,Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import VueLazyLoad from 'vue-lazyload';

import Base from './Pages/shared/base.vue';

import Csrf from './Pages/shared/csrf.vue';

import NavLink from './Pages/shared/navLink.vue';

// import NavLink from './Pages/shared/navLink.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('Head',Head)
            .component('Link',Link)
            .component('Base',Base)
            .component('Csrf',Csrf)
            .component('NavLink',NavLink)
            .use(VueLazyLoad, {
                preLoad: 1.3,
                attempt: 1,
                loading: '/preloader.png',
                // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
                listenEvents: [ 'scroll' ]
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
