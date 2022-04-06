//empty object 
let myname;
myname='sss';

//decleration and initialization
let calls_details='kkk'

let personDetails={
    fname:'Sandy',
    lname:'Allu',
    phone:123456,
    age:22,
    address:{
        presentAddr:{
            location:'VJA',
            pincode:520012
        },
        permanentAddr:{
            location:'AP',
            pincode:520011,
        }
    }
};
console.log(typeof personDetails);
console.log(personDetails);

//accessing  value from object
console.log(personDetails['age']);

//updating the value of inside object
console.log(personDetails.lname='aaa');
console.log(personDetails);

//adding new keys to object
console.log(personDetails.address.permanentAddr.area=1020);

//value inside object or nested object
personDetails.address.presentAddr.pincode;

//updating value of object key
personDetails.address.presentAddr.pincode =1000;



