import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'kp': '#d4620b',
                'kppale': '#fac29f',
                'kpnpale': '#f9b890',
                'bck': '#F2F2F2',
                'dtfpr': '#0B5DD7',
                'fox': '#d35400',
            },
            fontSize:{
                'lgg': ['15px','20px'],
            },
            strokeWidth:{
                '1/2': '0.5px',
                '3/2': '1.5px',
                '4': '2px',
            },
            textUnderlineOffset:{
                10: '10px',
                12: '12px',
                16: '16px',
            }
        },
    },

    plugins: [forms],
};
