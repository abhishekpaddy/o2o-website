/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                display: ['Chivo', 'system-ui', 'sans-serif'],
                body: ['Figtree', 'system-ui', 'sans-serif'],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                // OceanToOasis brand tokens
                lavender: '#E7E7F7',
                mist: '#F4F4FA',
                ocean: {
                    DEFAULT: '#0F2A44',
                    deep: '#081B2E',
                    mid: '#1B3A5C',
                },
                inkblue: '#4A6177',
                teal: {
                    DEFAULT: '#138A72',
                    light: '#1DB58F',
                },
                energy: '#A3E635',
                cyan: '#64A5C5',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'blob-drift': {
                    '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
                    '33%': { transform: 'translate(12%, -8%) scale(1.1)' },
                    '66%': { transform: 'translate(-10%, 10%) scale(0.95)' },
                },
                'blob-drift-alt': {
                    '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
                    '33%': { transform: 'translate(-14%, 10%) scale(1.15)' },
                    '66%': { transform: 'translate(10%, -12%) scale(0.9)' },
                },
                'rise-in': {
                    from: { opacity: '0', transform: 'translateY(24px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'flow': {
                    '0%': { strokeDashoffset: '40' },
                    '100%': { strokeDashoffset: '0' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'blob-drift': 'blob-drift 22s ease-in-out infinite',
                'blob-drift-alt': 'blob-drift-alt 28s ease-in-out infinite',
                'rise-in': 'rise-in 0.8s ease-out forwards',
                'flow': 'flow 3s linear infinite',
                'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
