let guestlist=["ayesh","hamza","ruby","najma"];
let dontcome = guestlist[0];
console.log(dontcome,"nahi aasakta");
guestlist.splice(0,1,"amir");
console.log("good news!we have found a bigger table for dinner");
guestlist.unshift("ali");
guestlist.push("zain");
let middleIndex:number = math.floor(guestlist.length/2);
guestlist.splice(middleIndex,0,"usama");
console.log("update list for our guest");
guestlist.forEach(oneguest => console.log(`salam ${guest},would you like to dinner with me`));