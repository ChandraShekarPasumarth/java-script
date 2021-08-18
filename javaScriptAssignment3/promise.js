function getData(uId){
    return new Promise((resolve,reject)=>{
        setTimeout( () => {
            let error = false;
            if(!error){
                console.log("Getting the information");
            }
            else{
                console.log("Getting information is failed");
            }

        },3000);
    })
}
console.log("start");
var email =getData("skc");
email.then((message) => console.log("Email id of the user id is : "+message));
console.log("end");