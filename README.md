## <a href="https://fcbc.site">Films Compilations By Community</a>.

Сайт, на котором пользователи могут оставлять свои подборки фильмов.

## Технологический стэк
- laravel 10
- vue 3
- inertia
- tailwindcss

## О проекте
- Пользователь может пройти аутентификацию через vkontakte, yandex, google
- Пользователи могут создавать подборки фильмов
- Фильмы приходят с API и привязаны ссылками к <a href="https://kinopoisk.ru">Кинопоиску</a>
- Пользователи могут комментировать подборки и отвечать на комментарии
- Пользователи могут оценивать комментарии и подборки
- Пользователи могут обновлять информацию о своём профиле
- Любой посетитель может отправлять жалобы на подборки, фильмы, комментарии

## Установка
- <p>
        <code>git clone https://github.com/useruntitled/compilations/</code>
    </p>
- <a href="https://laravel.com/docs/10.x/sail#main-content">Разверните проект с помощью sail</a>
- <p><a href="#настройка">Настройте .env конфиг</a></p>
- <p><code>sail artisan migrate --seed</code></p>
- <p><code>sail npm run dev</code></p>
- <p><code>sail artisan test --parallel</code></p>

## Настройка
- <a href="https://pusher.com">Получите токен Pusher</a>
- <a href="https://kinopoisk.dev/">Получите токен для работы с фильмами</a>
- Для того, чтобы пользователи могли пройти аутентификацию, получите oauth токены у <a href="https://vk.com">vkontakte</a>, <a href="https://ya.ru">yandex</a>, <a href="https://google.com">google</a>.
