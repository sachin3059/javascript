// for loop:
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(index);   
}

// break and continue
for (let index = 1; index <=20; index++) {
    const element = index;
    if(element == 5){
        console.log("detected ")
        break
    }
    console.log(element); 
}
for (let index = 1; index <=20; index++) {
    const element = index;
    if(element == 5){
        console.log("detected ")
        continue
    }
    console.log(element); 
}

let i = 0
while (i < 10) {
    console.log(i)
    i+=1
}