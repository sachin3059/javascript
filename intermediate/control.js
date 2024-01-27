const temperature = 41
// if else statement:
if(temperature<50){
    console.log("Temperature is less than 50")
}
else{
    console.log("Temperature is more than 50")
}



const balance = 1000

if(balance<500){
    console.log("balance is less than 500");
}
else if(balance<750){
    console.log("balance is less than 750");
}
else if(balance <1000){
    console.log(("balance is less than 1000"));
}
else{
    console.log("balance is equal or greater than 1000");
}

// and condition => &&
// or conditon => ||


//*****swith statement*****/

const month = 3

switch (month) {
    case 1:
        console.log("january"); 
        break;
    case 2:
        console.log("febuary"); 
        break;
    case 3:
        console.log("march"); 
        break;
    case 4:
        console.log("april"); 
        break;

    default:
        console.log("error!");
        break;
}