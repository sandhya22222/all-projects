let myThbs = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('THBS');
        reject('thbs');
    }, 2000);

});

myThbs
    .then(
        (success) => {
            console.log(`I am in success callback of promise ${success}`);
        },
        (error) => {
            console.log(` I am in reject callback of promise ${error}`);
        }
    )

    .then(
        (sval) => { console.log(`111 i am in success chain ${sval}`) },
        (errorVal) => { console.log(`111 i am in error chan ${errorVal}`) }
    )
    .then(
        (sval) => { console.log(`222 i am in success chain ${sval}`) },
        (errorVal) => { console.log(`222 i am in error chan ${errorVal}`) }
    )
    .catch(
        (onReject) => {
            console.log(`i am inside reject and catch block`)
            
        }
    )
