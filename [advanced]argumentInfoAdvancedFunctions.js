function argumentInfo(){

let arr = [];
let obj = {};

[...arguments].forEach(el => {
    let typeOfElement = typeof(el);
    //    obj[typeOfElement]=element;
      
       arr.push({typeOfElement, el})

       if (!obj[typeOfElement]) {
           obj[typeOfElement] = 1;
       }else{
           obj[typeOfElement]++;
       }
});

arr.forEach(element => {
    console.log(`${element.typeOfElement} : ${element.el}`);
});

// console.log(obj);
// console.log(arr);

let sortedObj = Object.entries(obj).sort((a,b) => b[1] - a[1]);

// console.log(typeof(sortedObj));
// console.log(sortedObj);

sortedObj.forEach(x => {
console.log(`${x[0]} = ${x[1]}`);
});

}


argumentInfo('cat', 42, function () { console.log('Hello world!'); })