// path module
const mypath = require('path');
const fs = require('fs')

const notes = '/users/joe/notes.html'; //Linux

console.log(mypath.dirname(notes)) //users/joe
console.log(mypath.basename(notes)) //notes.html
console.log(mypath.extname(notes)) //.html

const winPath = 'C:\Users\sandhya_Allu'; //windows

console.log(mypath.dirname(winPath))
console.log(mypath.basename(winPath))
console.log(mypath.extname(winPath))

/**
 * reading content inside file using fs module
 */

const warn = (`I am reading file by readFile method`);
fs.readFile("./fs-path.js", 'utf8', (err, data) => {
    if (err) {
        console.error(`I am in error state ${err}`)
        return
    }
    console.warn(data);
})

/**
 * Writing content inside file using fs module
 */

const content = '---Appended contents'

fs.writeFile('./test.txt', content, { flag: 'a+' }, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Added content file Successfully')
})