// function hello() {
//     var a = "i am a "; //global variable

//     for (var i = 0; i < 5; i++) {
//         var b = "block"; //if we declare b with let keyword will not be accessible outside of loop
//     }
//     console.log(b);
// }

// hello();

const CMPYNAME = 'THIS';

// function funcaa() {
//     if (true) {
//         console.log(tmp); //uncaught ReferenceError: tmp is not defined
//     }

// }
// funcaa();

const myObj={};
// Object.freeze(myObj); //fix
// myObj ={};

myObj['fname'] = 'Sandhya';
console.log(myObj);

let message ='MOVIES';
let single = message + 'hello\n'+'world\n'+'my\n'+'name\n'+'is\n'+'sandhya';
console .log(single)

let myMessage =
`
${message}
hello
world
i
am 
on 
newline
${message}
without adding
`;
console.log(myMessage);
