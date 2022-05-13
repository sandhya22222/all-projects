function Address(props){
    let isLoggedIn = false;


    let address =(
        <>
        <div>
        <span><b>I am inside Address component</b></span>
        <br></br>
        <span>Location :<b>Bangalore</b></span>
        <br></br>
        <p>Office time:<b>{props.time}</b></p>
        </div>
        </>

    );

    if (isLoggedIn){
        return (<h1>I am in Office</h1>);
    } else{
        return address;
    }
}

export default Address;