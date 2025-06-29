const fs = require('fs');
const filePath = './a.txt';

try {
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        console.log('Content of a.txt:', content);
        console.log('Length of content:', content.length);
        console.log('This is a text from naam.js');
    } else {
        console.error('File does not exist:', filePath);
    }
} catch (err) {
    console.error('Error reading file:', err);
}