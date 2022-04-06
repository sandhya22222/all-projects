//normal function decleration
function getAddress(n1 , n2){
    let rs=50+50;
    return rs;
}

let result =getAddress();
console.log(result);

// another way of function declaration

function addNumber(n1 ,n2){
    return n1+n2;
}
console.log(addNumber(10,20));

//flat arrow declaration

let myadd = (n1,n2) => n1+n2;
console.log(myadd(50,60));