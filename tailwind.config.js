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
                'primary': '#1793E6',
                'fox': '#d35400',
                'secondary': '#595959',
                'field': '#F5F5F5',
                'shit': '#4f3d36',  
            },
            fontSize:{
                '13px': ['13px','18px'],
                '15': ['15px','20px'],
                '17px': ['17px','22px'],
                'lgg': ['17px','20px'],
            },
            fontWeight:{
                'w500': '500',
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
            },
            textDecorationThickness:{
                3: '3px',
                5: '5px',
            },
            fontFamily:{
                'roboto': ['Roboto','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','sans-serif'] ,
            },
        },
    },

    plugins: [forms],
};
