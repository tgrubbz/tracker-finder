#!/usr/bin/env node

const fs = require('fs');
const uglifyJS = require('uglify-js');

// Get command-line arguments
const args = process.argv.slice(2);
let inputFilePath = null;
let outputFilePath = null;

// Parse arguments
args.forEach((arg, index) => {
    if (arg === '--input' && args[index + 1]) inputFilePath = args[index + 1];
    if (arg === '--output' && args[index + 1]) outputFilePath = args[index + 1];
});

// Function to generate the bookmarklet
function generateBookmarklet(script) {
    const minified = uglifyJS.minify(script).code;
    const bookmarkletCode = `javascript:(function(){${minified}})();`;

    return encodeURIComponent(bookmarkletCode)
        // .replace(/%20/g, '+') // Optional: Convert spaces to '+', which works better in some browsers
        .replace(/%3A/g, ':') // Keep colons readable
        .replace(/%2F/g, '/') // Keep slashes readable
        .replace(/%3D/g, '=') // Keep equal signs readable
        .replace(/%3F/g, '?') // Keep question marks readable
        .replace(/%26/g, '&'); // Keep ampersands readable
}

// Handle input (file or stdin)
if (inputFilePath) {
    // Read from file
    if (!fs.existsSync(inputFilePath)) {
        console.error(`Error: ${inputFilePath} not found.`);
        process.exit(1);
    }

    const script = fs.readFileSync(inputFilePath, 'utf8');
    const bookmarklet = generateBookmarklet(script);

    if (outputFilePath) {
        // Save to output file
        fs.writeFileSync(outputFilePath, bookmarklet);
        console.log(`Bookmarklet saved to ${outputFilePath}`);
    } else {
        // Print to console
        console.log(bookmarklet);
    }
} else {
    // Read from stdin
    let input = '';
    process.stdin.on('data', (chunk) => (input += chunk));
    process.stdin.on('end', () => {
        const bookmarklet = generateBookmarklet(input.trim());
        console.log(bookmarklet);
    });
}
