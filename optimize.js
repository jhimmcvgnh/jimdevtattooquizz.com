const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove Intellimize anti-flicker and scripts
html = html.replace(/<style>\.anti-flicker[\s\S]*?<\/style>/, '');
html = html.replace(/<style>\[data-wf-hidden-variation\][\s\S]*?<\/style>/, '');
html = html.replace(/<script[^>]*>.*?intellimize.*?<\/script>/gi, '');
html = html.replace(/<link[^>]*intellimize[^>]*>/gi, '');
html = html.replace(/<script src="js\/117239042\.js" async=""><\/script>/g, '');

// Remove Cookiebot
html = html.replace(/<script[^>]*Cookiebot[^>]*>[\s\S]*?<\/script>/gi, '');
html = html.replace(/<script>\s*\/\/\s*Cookiebot[\s\S]*?<\/script>/gi, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Optimization complete.');
