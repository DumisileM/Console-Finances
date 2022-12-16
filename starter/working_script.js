var finances = [
    ['Jan-2010', 800],
    ['Feb-2010', 900],
    ['Mar-2010', 300],
    ['Apr-2010', -600],
    ['May-2010', 300],
    ['Jun-2010', 500],
    ['Jul-2010', 100],
    ['Aug-2010', 600],
    ['Sep-2010', -200],
    ['Oct-2010', 400],
    ['Nov-2010', 800],
    ['Dec-2010', -800],
];

// Total number of months in dataset
//get length of array
var totalNumMonths = finances.length;
console.log(totalNumMonths);
//The net total amount of Profit/Losses over the entire period.
//loop through the array and sum the second index and divide by the length of array.
var total = 0;
for (var i = 0; i < finances.length; i++) {

    total += finances[i][1];

}
console.log(total);

// The average of the **changes** in Profit/Losses over the entire period.
//loop through array and compare consecutive elements in the array.(nested loop?).

//put the difference between two months in a separate array
//add the differences and then divide by length of the array.
var differences = [];
var increases = [];
var decreases = [];

for (var i = 0; i < finances.length; i++) {

    var j = i + 1;
    console.log(j);
    if (j == finances.length) break;

    var diff = finances[i][1] - finances[j][1];
    console.log("diff between " + finances[i] + " and " + finances[j] + " is " + diff);
    console.log(diff);

    differences.push(diff);
    //if the difference is a positive/non-negative,
    // add to
    if (diff >= 0) {
        increases.push(diff);
    } else if (diff < 0) {
        decreases.push(diff);
    };
};


var sum = 0;
for (var i = 0; i < differences.length; i++) {
    sum += differences[i];

};
var averageChanges = sum / differences.length;
console.log(averageChanges);

// The greatest increase in profits (date and amount) over the entire period.
    //loop through array and compare consecutive elements in the array.(nested loop?). get the difference.
    // if the difference is positive number add to positive array
var greatestIncrease = increases.sort()[0];
console.log(increases);
console.log(greatestIncrease);



// The greatest decrease in profits (date and amount) over the entire period.
    //if the difference is negative num put in decreases array
var greatestDecrease = decreases.sort().reverse()[0];
console.log(decreases);
console.log(greatestDecrease);

    //get the biggest numbers from both arrays.

