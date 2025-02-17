/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";


export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
    theme: {
        extend: {
            colors: {
                olive: {
                    600: "#6B8E23", 
                },
                
            },
            fontFamily: {
                playfair: ["Playfair Display", "serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [daisyui],


};
