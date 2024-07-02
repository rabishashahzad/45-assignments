
// // // // Q2:
// // // // let personalname = "Rabisha"
// // // // console.log('hello,person Name,"would you like to play table tennis')

// // // // Q3:
// // // // let personName = "Rabisha";
// // // // console.log(personName.toLowerCase());
// // // // console.log(personName.toUpperCase());
// // // // console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase())

// // // // Q4:
// // // // console.log("allama iqbal once said","if faith islost,there is no security and there isno life for him who doesnot adhere to religion");

// // // // Q5:
// // // // let famousPerson =  "allama iqbal";
// // // // let message = "once said,'if faith is lost ,there is no securiy and thereis no life for him who does not adhere to religion'"
// // // // console.log(famousPerson,message);

// // // // Q6:
// // // // let whitespace = "\n\tRabisha khan\t\n";
// // // // console.log(whitespace);
// // // // let withoutwhite=whitespace.trim();
// // // // console.log("withoutwhitespace");
// // // // Q7,Q8
// // // // console.log(3+5);
// // // // console.log(12-4);
// // // // console.log(2*4);
// // // // console.log(16/2);
// // // // Q9
// // // // let favouriteNumber: number =5;
// // // // console.log(`My favourite numder is ${favouriteNumber}`);

// // // // Q10
// // // // authorRabisha Shahzad}
// // // // date:[ Friday , june 7 , 2024]

// // // // task 9:printing my favourit number

// // // // let favouriteNumber: number =6;

// // // // reveling my favourite number in a message format

// // // // console.log (`My favourite number is ${favouriteNumber}`);

// // // // Q11
// // // // let  names: string [] = ["Rabisha","umama","rafia","maria"];
// // // // console.log(names[1]);
// // // // console.log(names[2]);
// // // // console.log(names[3]);

// // // // Q12
// // // // let  names : string [] = ["Rabisha","umama","rafia","maria"];

// // // // let message : string  = "Do you like to play football?"
// // // // console .log(names[0] + " " + message )
// // // // console .log(names[1] + " " + message )
// // // // console .log(names[2] + " " + message )
// // // // console .log(names[3] + " " + message )

// // // // Q13
// // // // let vehicle :string [] = ["Ferrari","Bugatti","Lamborghini","Audi","Honda city"];
// // // // vehicle.map((items) => console.log(`I would like to own a ${items}`));

// // // // Q14
// // // // let  guestArr : string [] = ["Rabisha","umama","rafia"];

// // // // guestArr.map((items)=> (console .log(`Dear ${items}, You are invited to the dinner`)))

// // // // Q15
// // // // let guestArr : string[]= ["Ilyana","hareem","sehar khan","usama khan"];
// // // // let canNotAttend : string = "sehar khan"

// // // // console.log(canNotAttend + " " "can not attend the dinner.")

// // // // let newGuest : string = "hamza sohail"

// // // // guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

// // // // console.log(guestArr)

// // // // guestArr.map((items) =>
// // // // console.log(`Dear${items}, you are invited to the dinner.`));

// // // // Q16
// // // // let guestArr : string[] = ["ALi","Sameera","Hafsa","Alvina"];

// // // // let canNotAttend : string = "Hafsa"

// // // // let newGuest : string = "fabiha"

// // // // guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// // // // console.log(guestArr)

// // // // guestArr.map((items)=>
// // // // console.log(`Dear ${items}, I found a biggar dinner table so I am invited more people.`));

// // // // part2
// // // // let guestBeg : string = "shahzad"
// // // // guestArr.unshift(guestBeg);
// // // // console.log(guestArr)

// // // // part3 middle
// // // // let middleGuest : string ="fari"
// // // // let middleIndex = guestArr.length/3
// // // // guestArr.splice(middleIndex,0,middleGuest)
// // // // console.log(guestArr)

// // // // part4 append
// // // // guestArr.push("fiza")
// // // // console.log(guestArr)

// // // // part5
// // // // guestArr.map((item) =>
// // // // console.log(`Dear ${item},you areinvited in the  more people category on dinner`));

// // // // Q17

// // // // let guest: string[] = ["bilal","bisma"];

// // // // console.log("Due to listed space, only two people can be invited for dinner.");

// // // // while (guest.length> 2) {
// // // //     const removedGuest = guest.pop();
// // // //     console.log(`sorry, ${removedGuest}, you are not longer invited to dinner`);
// // // //  }
 
// // // // guest.forEach((guest) =>{
// // // //     console.log(`Dear ${guest}, you are still invited to dinner.`);
// // // // });

// // // // guest.pop();
// // // // guest.pop();

// // // // console.log("Final guest list:", guest);

// // // // Q18
// // // // let placesToVisit: string[] = ["Afganistan","Russia","Canada","Saudia","Pakistan"];

// // // // console.log("Original order:", placesToVisit);

// // // // console.log("Alphabettical order:", [...placesToVisit].sort());

// // // // console.log("original order after sorting:", placesToVisit);

// // // // console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());

// // // // console.log("Original order after reverse sorting:",placesToVisit);

// // // // placesToVisit.reverse();
// // // // console.log("Reverse order:", placesToVisit);

// // // // placesToVisit.reverse();
// // // // console.log("Back to original order:", placesToVisit);

// // // // placesToVisit.sort();
// // // // console.log("Sort in alphabetical order:", placesToVisit);

// // // // placesToVisit.sort((a, b) => b.localeCompare(a));
// // // // console.log("Sort in reverse alphabetical order:", placesToVisit);

// // // // Qnotassigment
// // //  //let netWork: string[]=["Babanet464","Makki Madni Travels","classic fiber2","cyber"];

// // //  //console.log("I dont have passward ");

// // // // Q19
// // // // let invitation : string [] = ["bilal","bisma"]
// // // // let  count_invitation : number = invitation.length

// // // // console.log(`$(count_invitation) people wil come to the dinner`)

// // // // Q20
// // // // let language: string [] = ["urdu","english","sindhi","punjabi","pashto"];

// // // // console.log("list of language:");
// // // // console.log(language)

// // // //Q21
// // // //let person:{name:string, fname : string,age: number} = {name:"rabisha", fname:"female",age:27};
// // // //console.log(person)

// // // //Q22
// // // //const days : string [] =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// // // //console.log(days{7})

// // // //console.log(days[6])

// // // //Q23
// // // //let car ="subaru";

// // // //console.log("is car == 'subaru'?predict true");
// // // //console.log(car == 'subaru')

// // // //console.log("is car is !='honda city'?predict true")
// // // //console.log(car !='honda city')

// // // //console.log("is car == 'subaru'? predict false");
// // // //console.log(car == 'Subaru')

// // // //console.log("is car == 'SABARU'? predict false");
// // // //console.log(car == 'SUBARU')

// // // //console.log("is car.length ==6?predict true")
// // // //console.log(car.length == 6)

// // // //console.log("is car.length !=10?predict true")
// // // //console.log(car.length != 10)

// // // //console.log("is 10 > 45 ? predict false")
// // // //console.log(10 > 45)

// // // //console.log("is  3 <=2 ? predict false")
// // // //console.log(3 <=2)

// // // //console.log("is 72 > 63 ? predict false")
// // // //console.log(72 > 63)

// // // //console.log("is 72 > 83  ? predict false")
// // // //console.log(72 > 83)

// // // //console.log("is car =='subaru' && car.lenght == 6? predict true")
// // // //console.log(car =='sabaru' && car.length == 6)

// // // //Q24
// // // //let name_1 :string =  "rabisha"
// // // //let name_2 :string =  "rabisha shahzad"
// // // //let name_3 :string =  " miss rabisha shahzad"

// // // //if(name_1 ==name_3){
// // //   //  console.log("name are not equal")
// // // //}else {
// // //   //  console.log("name are not equal")
// // // //}

// // // //if(name_1 != name_2){
// // //   //  console.log("name are not equal")
// // // //}

// // // //if(name_1 != name_3){
// // //   //  console.log("name are  equal")
// // // //}

// // // //let age_1 :number = 18
// // // //let age_2 :number = 22

// // // //if(age_1 == 18){
// // //    // console.log("eligible for vote")
// // // //}

// // // //if(age_1 == 22){
// // //   //  console.log("eligible for vote in older category")
// // // //}

// // // //if(age_1 <= age_2){
// // //   //  console.log("younger")
// // // //}

// // // //if(age_2 <= age_1){
// // //   //  console.log("older")
// // // //}

// // // //if(age_1 = 18 && age_2){
// // //   //  console.log("person is eligible for vote ")
// // // //}

// // // //if (age_1 == 18 || age_2 !=22) {
// // //  //  console.log("person is eligible for vote ")
// // // //}

// // // //let country : string [] = ["pakistan","japan","iraq","malaysia"]
// // // //if(country.includes("iraq")){
// // //   //  console.log("iraq is in country list")
// // // //}

// // // //if (country.includes("america")){
// // //   //  console.log("america is not include in an array")
// // // //}

// // // //Q25

// // // //let alien_colour = "green"

// // // //if( alien_colour == "green")
// // //  //console.log("you earn 5")

// // // //let alien_colour : string ="red"
// // // //if(alien_colour == "green")
  
// // //   //console.log("no output")

// // //  // Q26
// // // // let alien_colour = "green"

// // // //if( alien_colour == "green"){
// // //  //console.log("player just earned 5 piont for shooting thr alien")
// // // //}else{
// // //   //console.log("player just earned 10 point")
// // // //}
// // // //let alien_colour = "red"

// // // //if( alien_colour == "green"){
// // //  //console.log("player just earned 5 piont for shooting thr alien")
// // // //}else{
// // //   //console.log("player just earned 10 point")
// // // //}

// // // //Q27

// // // //let alien_colour: string ="red"

// // // //if(alien_colour == "green"){

// // //   //console.log("5 point")
// // // //}else if( alien_colour == "yellow"){
// // //   //console.log("10 point")
// // // //}else{
// // //   //console.log("15 point")
// // // //}

// // // //Q28 ..............2,4,13,20,65

// // // let age : number = 18

// // // //if(age < 2){
// // //   //console.log("you are a baby")
// // // //} else if (age < 4) {
// // //   //console.log("you are a toddler")
// // // //} else if (age < 13){
// // // //  console.log("yoy area kid")
// // // //} else if (age < 20){
// // //   //console.log("you are teenager")
// // // //} else if( age < 65) {
// // //   //console.log("you are adult")
// // // //} else{
// // //   //console.log("you are older")
// // // //}

// // // //Q29

// // // let  favourit_fruit : string [] = ["kivi","orange","apple","berry","peach"]

// // // if (favourit_fruit.includes("kivi")) {
// // //   console.log("kivi")
// // // }

// // // if(favourit_fruit.includes("apple")) {
// // //   console.log("apple")
// // // }

// // // if (favourit_fruit.includes("orange")) {
// // //   console.log("orange")
// // // }

// // // if (favourit_fruit.includes("berry")) {
// // //   console.log("you really like banana")
// // // }
// // // if (favourit_fruit.includes("peach")) {
// // //   console.log("yoou really like banana")
// // // }

// // //Q30
// // let users : string [] = [,"eric","haseeb","ali","fatima","admin"]

// // for(let user of users) {
// //     if(user === "admin"){
// //       console.log("Hello admin, would you like to see a status report?")
// //     } else {
// //       console.log (" Hello $(user), thankyou for logging in again")
// //     }
// // }

// //Q31
//  let userName : string [] = ["admin","aisha","salar","sikandar","emama"];

//  if(userName.length === 0){
//    console.log ("we need to find some users!")

//    } else {
//           userName=[];
//           console.log("All user Name hane been removed."  +userName.length)
//   } 
//Q32
// let current_users : string [] = ["AdAm","AlI","AhMed","Hammad","John"];
// let newUser : string [] = ["amna","AdAm","Naveed","Hareem","Hammad"];

//  newUser.forEach(newUsername => {
//   let lowerCase: string = newUsername.toLowerCase();
//   if(current_users.map(c_user =>  c_user.toLowerCase()).includes(lowerCase)){
//     console.log(`the username ${newUsername} is notavalible.Please write a differentusername`);
//   }
//   else{
//     console.log(`the username ${newUsername} is available`);
//  }
 //})
  //Q33
//   let number : number[] = [1,2,3,4,5,6,7,8,9]
//   for(let num of number){
//      let ordinalEnding :string ;

//      if(num ===1){
//         ordinalEnding = "st";
//      }
//      else if(num ===2){
//         ordinalEnding = "nd";
//      }
//     else if(num ===3){
//     ordinalEnding = "rd";
//      }
//      else{
//         ordinalEnding = "th";
    
//      }
//     console.log(`${num}${ordinalEnding}`)
// }
//Q34
// let Pizzas: string[] = ["tikka","mlay boti","BBQ chicken"];
// for(let Pizza of Pizzas){

//     console.log(` Ilike ${Pizza} pizza.`);
// }

// console.log(`i realy like pizza!`);

//Q35

// let Animals : string []= ['dog','cat','rabbit'];

// for(let Animal of Animals){

//     console.log(`A ${Animal}would make a great pet.`);
// }

// console.log(`Any of these animals would make a great pet`)

//Q36

// function make_shirt(size:string, text:string){


// console.log(` creating a large a ${size} shirt with the message:${text}`);
// }

// make_shirt('large','Hello world');

// make_shirt('medium','Hello world');

// make_shirt('small','Hello world');

//Q37
// function make_shirt(size:string ='large', text:string = 'I love typeScript'){

//         console.log(` creating a large a ${size} shirt with the message:${text}`);
//      }

//      make_shirt();
        
//      make_shirt('medium');
//      make_shirt('Small','I love python');

// //Q38

// function describe_city(city: string, country:string = 'Default Country'){

//     console.log(` ${city} is in ${country}`);
// }
    
//     describe_city('karachi','pakistan');

//     describe_city('tokyo','japan');

//     describe_city('Paris');

//Q39

// function city_country(city:string,country:string){

//      return`${city},${country}`;
// }

// console.log(city_country('Karachi','Pakistan'));

// console.log(city_country('tokyo','japan'));

// console.log(city_country('paris','france'));

//Q40

// function make_album(artist: string, title:string, tracks?:number) {

//    const album:{artist: string, title: string, tracks?:number} = {

//     artist : artist,
//     title : title
//    }

//    if(tracks !== undefined){
//     album.tracks = tracks;
//    }

//    return album;

// }

//  const album1 = make_album('Artist 1' ,'Album Title 1');
// console.log(album1);

// const album2 = make_album('Artist 2' ,'Album Title 2');
// console.log(album2);

// const album3 = make_album('Artist 3', 'Album Title 3', 12);
// console.log(album3);
 
//Q41
// let magician : string[] = ['Harry potter','hermione Granger','Ron Weasley','Albus Dumbledore'];

// function show_magicians(magician: string[]){
//   magician.forEach(element => {
//    console.log(element);      
//    });
// }


// show_magicians(magician)

//Q42

// let magician : string[] = ['Harry potter','hermione Granger','Ron Weasley','Albus Dumbledore'];


// function make_great (magicianArray:string[] ){ 

//    for(let i=0; i<magicianArray.length; i++){

//         magician[i] = 'the Great' +  magicianArray[i]
//    }
// }


// function show_magicians(magician: string[]){

//   magician.forEach(element => {
//    console.log(element);      
//    });
// }

// make_great(magician);
// show_magicians(magician)



//Q43



// let magician : string[] = ['Harry potter','hermione Granger','Ron Weasley','Albus Dumbledore'];

// function copyArray(arr:string[]){
//     return [...arr] 
// }


// function make_great (magicianArray:string[] ){ 

//    for(let i=0; i<magicianArray.length; i++){

//         magicianArray[i] = 'the Great' +  magicianArray[i]
//    }
// }


// function show_magicians(magician: string[]){

//   magician.forEach(element => {
//    console.log(element);      
//    });
// }


//  const  copyMagicianArray = copyArray(magician)

// make_great(magician);

// console.log('this is my original array');
// show_magicians(magician)

// console.log('this is my modified copy of the array');
// show_magicians(copyMagicianArray)



// console.log('this is my modified copy of the array');
// show_magicians(magician)


//Q44
// function makrSandwich (item: string[]) {
//   console.log('make your sandwich with:');

// item.forEach(element => console.log("- " + element)); 

// console.log('Enjoy your sandwich !');
  
// }


// makrSandwich(['ham','cheese','lettuce']);

// makrSandwich(['Turkey','Bacon']);

// makrSandwich(['peanut','butter','jelly']);

//Q45

import { features} from process;

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption : { [ key : string] : any } [] ):object {

 const carInfo = {
    manufacturer,
    modelName,
    ...Object.assign({}, ...extraOption)
 }

 return carInfo;
};

let answare = storeCarInfo('Honda', 'civic', {colour:'black'},{features:['Navigation','power window']})

console.log('answare')