// for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log((num));   
}


// map

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('aus', "Australia")

// console.log(map);

// for (const key of map) {
//     console.log(key);   
// }

for (const [key,value] of map) {
    console.log(key, ":->", value);
    
}


const myObj = {
    js:'javascript',
    py:'python',
    cpp:"C++",
    rb:'ruby'
}

for (const key in myObj) {
    console.log(myObj[key]); 
}


const programming = ["py", "c++", "rb", "js", "java"]
programming.forEach(element => {
    
});
