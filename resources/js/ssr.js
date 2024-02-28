import {createInertiaApp} from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import {renderToString} from '@vue/server-renderer'
import {createSSRApp, h} from 'vue'
import {ZiggyVue} from 'ziggy-js';
import {Head} from '@inertiajs/vue3'
import {Link} from '@inertiajs/vue3'
import '../css/app.css';
import {createI18n} from "vue-i18n";
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


createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({App, props, plugin}) {
            return createSSRApp({render: () => h(App, props)})
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(i18n)
                .component('Head', Head)
                .component('Link', Link)
        },
    }),
)
