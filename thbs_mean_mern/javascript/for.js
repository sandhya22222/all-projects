let myArr =['hello' ,'how' , 'are', 'you'];
//traditional for loop inside javascript
for  (let i=0;i<myArr.length;i++) {
    console.log (`for loop number ${i} array value at iteration "${myArr[i]}"`)
}

//forEach();
console.log ('strating loop with for each method');
myArr.forEach( (ele , index ,arr) => {
    console.log(`for loop number ${index} array value at iteration "${ele}" --> ${arr}`)
});

//filtered element based on condition

let numberList=[20,12,18,19,14,15];
let elemeless_5 = numberList.filter((val,index,arr) =>{
    //on what we want filter elements
    console.log(val,index,arr)
    return val > 15;
});
console.log(elemeless_5);

//filtered array of object

let personList =[
    {name : 'Priya' ,skill: ['java' ,'javascript','css']},
    {name : 'Sindu' ,skill: [ 'javascript','css']},
    {name : 'Vara' ,skill: ['Python','css']},
    {name : 'Sandy' ,skill: ['java' ,'javascript','css']}
]

let filteredPerson = personList.filter((val,index,arr)=>{
     console.log(val);
    //  return val.name.startsWith('S');
     return val.skill.includes('java');
});
console.log('======= Fileters Persons========');
console.log(filteredPerson);

/**
 * find going to loop as soon as condition returns true
 */

const array1=[5,12,10,18,150,32];
const found =array1.find((Element,index) =>{
   console.log(Element,index)
   return Element >10 ;//true
});
console.log (found);

/**
 * findIndex going return index of found element--->condition satisfied
 */

const my1=[5,12,10,18,150,32];
const  myFound1=my1.findIndex((element,index)=>{
    console.log(element,index)
    return element > 100; //true
});
console.log(`Condition satisfied element index is --->${myFound1}`);

/**
 * indexOf()
 * if element found going return index of element or
 * if not found return -1 as result
 */

const my2=[5,12,8,18,150,32];
console.log(my2.indexOf(2));

console.log(my2.join('*'));

let personMap =[
    {name : 'Priya' ,skill: ['java' ,'javascript','css']},
    {name : 'Sindu' ,skill: [ 'javascript','css']},
    {name : 'Vara' ,skill: ['Python','css']},
    {name : 'Sandy' ,skill: ['java' ,'javascript','css']}
];

let mappedPerson =personMap.map((val,inx,arr) =>{
 val.name ="Hello" +val.name; //modified value
 return val;
});

console.log(personMap);

console.log(mappedPerson);
