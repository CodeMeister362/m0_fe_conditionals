//Using the following variables:

var goodDrivingRecord = true;
var age = 25;

//Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
//- If the driving record is good and user is over 25 years old, they should get a discount on the car rental
//- If the user either has a good record or is over 25 years old, they should pay full price
//- If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

if (goodDrivingRecord === true && age >= 25) {
    console.log("You get a discount on your rental!");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log("You get our standard rate.");
} else {
    console.log("You need a co-signer for the rental.");
}


var goodDrivingRecord = false;
var age = 25;


if (goodDrivingRecord === true && age >= 25) {
    console.log("You get a discount on your rental!");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log("You get our standard rate.");
} else {
    console.log("You need a co-signer for the rental.");
}


var goodDrivingRecord = false;
var age = 21;

if (goodDrivingRecord === true && age >= 25) {
    console.log("You get a discount on your rental!");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log("You get our standard rate.");
} else {
    console.log("You need a co-signer for the rental.");
}