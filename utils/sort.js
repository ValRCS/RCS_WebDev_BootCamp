rawFireObj = {
  "-LRRAKSZk29dnOhBMNM4": { isDone: false, title: "Buy Beer", quant: 5 },
  "-LRRAPZYcIblFPMdec6Q": { isDone: true, title: "Buy Chips" , quant: 12},
  "-LRRAqZOJB85ik0S2h6R": { isDone: false, title: "Eat Chips" , quant: 7},
  "-LRRAuIuHBi2vyGyr1q8": { isDone: false, title: "Drink Beer", quant: 4 }
};

myarr = [];

// create an array of objects containing above information
for (key in rawFireObj) {
    let newobj = rawFireObj[key];
    newobj.userId = key;
    myarr.push(newobj);

    // can also specify each sub key and value but above is easier
    // myarr.push({
    //     userID: key,
    //     isDone: rawFireObj[key].isDone,
    //     title: rawFireObj[key].title,

    // })
}

console.log(myarr);

//sorting in ascending order by quantity (IN PLACE!)
myarr.sort((a,b) => a.quant > b.quant);

console.log(myarr);

//sorting alphabetically by Title (IN PLACE!)

myarr.sort((a,b) => a.title.localeCompare(b.title));

console.log(myarr);

//sorting in ascending order by isDone (IN PLACE!) remember 0 == false, 1 == true 
myarr.sort((a,b) => a.isDone > b.isDone);

console.log(myarr);

//reverse a and b for DESCENDING


