const name = 'Roshit'
const repoCount = 10

// console.log(name + repoCount + ' Value'); not recommended 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Roshit')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  //kun position ma kun chai letter chha vanera herna lai charAt() garera number passs garna milchha 

//substring garna lai 
const newString = gameName.substring(2,5)
console.log(newString);

// dot slice (we can give range and negative value dina sakinx jasley garda reverse bata start hunchha)
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     Shreesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // Generally trim() method unnecessary space hatauna lai use garnchha 

const url = "http://roshit.com/roshit%20shreesh"
console.log(url.replace('%20', '-')) //to change url path

console.log(url.includes('roshit')); // string chcek garna lai string words chha ki chhaina vanera herna lai


//String lai array ma convert garn alai 
console.log(gameName.split('-'));