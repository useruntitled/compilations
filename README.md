## <a href="https://fcbc.site">Films Compilations By Community</a>.

A site where users can post their movie selections.

<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0.gif"/>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/Mobile.png"/>

## Features

- <b>Storing and editing post</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0.gif"/>  
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%A0%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D1%81%D1%82%D0%B0.gif"/>  
- <b>Realtime comments feed</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%A0%D0%B8%D0%BB%D1%82%D0%B0%D0%B9%D0%BC%20%D1%84%D0%B8%D0%B4.gif"/>  
- <b>Realtime notifications</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%A0%D0%B8%D0%BB%D1%82%D0%B0%D0%B9%D0%BC%20%D1%83%D0%B2%D0%B5%D0%B4%D0%BE%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F.gif">  
- <b>Recursive comments system</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B5%D0%B8%D0%B2.gif"/>
- <b>Personal profile page</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0.gif" />
- <b>Reports</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%9E%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B6%D0%B0%D0%BB%D0%BE%D0%B1%D1%8B.gif" />
- <b>Admin panel</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/%D0%90%D0%B4%D0%BC%D0%B8%D0%BD%20%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C.gif" />
- <b>Oauth</b>
<img src="https://github.com/useruntitled/compilations/blob/master/doc/Oauth.gif"/>

## Stack
- <a href="https://laravel.com">laravel 10</a>
- <a href="https://vuejs.org">vue 3</a>
- <a href="https://inertiajs.com">inertia </a>
- <a href="https://tailwindcss.com">tailwindcss</a>

## About project
- The user can authenticate via vkontakte, yandex, google
- Users can create movie collections
- Movies come with API and are linked to <a href="https://kinopoisk.ru ">Kinopoisk</a>
- Users can comment on collections and respond to comments
- Users can rate comments and selections
- Users can update their profile information
- Any visitor can send complaints about collections, movies, comments

## Local installation (Without Oauth2)
- <p>
        <code>git clone https://github.com/useruntitled/compilations/</code>
  </p>
- <p><a href="#настройка">Configure .env</a></p>
- <a href="https://laravel.com/docs/10.x/sail#main-content">Install docker and docker-composel</a>
- <p><code>docker-compose up -d --build</code></p>
- <p><code>docker-compose run --rm artisan migrate --seed</code></p>
- <p><code>docker-compose run --rm artisan test --parallel</code></p>
