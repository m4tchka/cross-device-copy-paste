/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow:{
                "custom1":"2px 2px 5px rgba(0,0,0,0.05)"
            }
        },
        colors: {
            error:"#e7195a",
            green2:"#1aac83",
            offwhite:"#ffefef",
            customText:"#555",
            bg:"#f1f1f1",
        },
    },
    plugins: [],
    
};
