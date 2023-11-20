import localFont from 'next/font/local';

// =====================
// Neue Montreal
// Font class Export.
// =====================
const font = localFont({
    src: [
        {
            path: './NeueMontreal-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './NeueMontreal-Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './NeueMontreal-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './NeueMontreal-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
        //medium
        {
            path: './NeueMontreal-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './NeueMontreal-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
    ],  
    display: 'swap',
});

export default font;