<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
    <link rel="icon" sizes="32x32" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"Website","name":"{{ env('APP_NAME')  }}
        "}
    </script>

    <link rel="preload" as="font" crossorigin href="{{ Vite::asset('resources/css/fonts/Roboto-Regular.ttf') }}" />
    <link rel="preload" as="font" crossorigin href="{{ Vite::asset('resources/css/fonts/Roboto-Medium.ttf') }}" />
    {{--        <title inertia>{{ config('app.name', 'Laravel') }}</title>--}}

    <!-- Fonts -->
    {{-- <link rel="preconnect" href="https://fonts.bunny.net"> --}}
    {{-- <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" /> --}}

    <!-- Scripts -->

    @if(env('APP_ENV') == 'production')
        <!-- Yandex.Metrika counter -->
        <script type="text/javascript">
            (function(m, e, t, r, i, k, a) {
                m[i] = m[i] || function() {
                    (m[i].a = m[i].a || []).push(arguments);
                };
                m[i].l = 1 * new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                        return;
                    }
                }
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(96570526, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        </script>
        <noscript>
            <div><img src="https://mc.yandex.ru/watch/96570526" style="position:absolute; left:-9999px;" alt="" /></div>
        </noscript>
        <!-- /Yandex.Metrika counter -->

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L89FSBG9WY"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag("js", new Date());

            gtag("config", "G-L89FSBG9WY");
        </script>

        <!-- /Google tag (gtag.js) -->
    @endif

    @routes

    {{--        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])--}}
    @vite(['resources/js/app.js'])

    @inertiaHead
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
