// ES5 --> from array you get value inside variable

var list =[1,2,3]; //array 10 elament;

var  a= list[0], b=list[2];

// let name ='thbs';
// let hello ='goodby';
// let name = 'thbs' , hello='goodby';
// let name,hello;

let getPersonInfo =() => {
    return {
        op :'plus',
        lhs : 'left-side',
        rhs : 'right-side'
     }
}

var tmp =getPersonInfo();

let { op, lhs ,rhs} = getPersonInfo();
console.log(op,lhs,rhs);

let cmpy = {
    name_ss: 'thbs',
    noOfEmp: 100,
    foundation:'March 2020',
    address:{
        permanant :{
            city : 'mum'
        },
        current :{
            city:'bang',
            pin :2020
        }
        }
    };

    let {
        noOfEmp,foundation,address:{permanant:{city}},
    } =cmpy;

    console.log(noOfEmp, foundation,);
