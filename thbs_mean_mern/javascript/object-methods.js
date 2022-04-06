// object.keys() & object.values()
const icecreamColors ={
    chocolate: 'brown',
    vanila : 'white',
    butterscotch : 'yellow',
};

const colors =Object.values(icecreamColors);
console.log('------Object values --------');
console.log(colors);

const keys =Object.keys(icecreamColors);
console.log('------key values --------');
console.log(keys);

//object.freeze()

const object1={
 name:'sandy'
}

Object.freeze(object1);

object1.name ='Phani';
object1.age='1999';

console.log(object1);

//object.assign()

const firstObject ={
    firstName :'Allu'
}

const secondObject ={
    lastName :'Sandy'
}

const combinedObject =Object.assign(firstObject,secondObject);
console.log(combinedObject)