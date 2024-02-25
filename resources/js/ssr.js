import {createInertiaApp} from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import {renderToString} from '@vue/server-renderer'
import {createSSRApp, h} from 'vue'
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import {Head} from '@inertiajs/vue3'
import {Link} from '@inertiajs/vue3'
import '../css/app.css';
import {createI18n} from "vue-i18n";
import VueLazyLoad from 'vue-lazyload';

const appName = import.meta.env.VITE_APP_NAME || 'fcbc';


createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
            return pages[`./Pages/${name}.vue`]
        },
        setup({App, props, plugin}) {
            return createSSRApp({render: () => h(App, props)})
                .use(plugin)
                .use(ZiggyVue)
                .component('Head', Head)
                .component('Link', Link)
        },
        progress: {
            delay: 150,
            color: '#d4620b',
        },
    }),
)
