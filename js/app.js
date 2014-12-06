// Food object constructor function
function Food (name, prepTime, veg, steps) {
  this.name = name;
  this.prepTime = prepTime;
  this.veg = veg;
  this.steps = steps;
}

// Create sample food objects
// Ideal: linked to a real food recipe database
var egg = new Food('Egg', 5, false, ['Crack eggs.', 'Fry for 5 mins.']);
var proteinShake = new Food('Protein Shake', 2, true, ['Get a scoop of vegetarian protein powder.', 'Mix with 200ml of milk.']);
var padThai = new Food ('Padthai', 20, false, ['Boil the noodles for 5 mins.', 'Mix with sauce.', 'Add shrimps.']);
var salad = new Food ('Salad', 5, true, ['Chop up lettuce and tomato.', 'Add balsamic dressing.', 'Top with almonds.']);
var carrot = new Food ('Carrot', 1, true, ['Walk to the supermarket.', 'Buy some carrots.']);
var fishTacos = new Food('Fish Tacos', 30, false, ['Walk to TacoTime.', 'Wait in line.', 'Order your fish tacos.']);

// array variable to hold all food objects
var objArr = [];
objArr.push(egg, proteinShake, padThai, salad, carrot, fishTacos);

// function to be passed on as a callback on .click()
function showRecipe (array) {
    // randomize the index based on the length of the array eg. length = 3, randomize 0,1,2
    var randomIndex = Math.floor(Math.random()*array.length);
    // pick one element from the array
    var randomOption = array[randomIndex];
    // display the name of dish randomly chosen
    $("#result").text(randomOption.name);
    // display the name of dish
    $("#prepTime").text('Prep time: '+randomOption.prepTime+' mins');
    // display the recipe of dish
    $("#recipe").text('Recipe: '+randomOption.steps.join(' '));
}

// find the average prep time for all dishes
var avgTimeAllDishes = objArr.map(function (element) {
  return element.prepTime;
}).reduce(function (element, result) {
  return element + result;
})/objArr.length;

// display total number of dishes available
$("#totalNumDishes").text('We have total of '+objArr.length+' dishes.');
// display the average prep time
$("#avgTimeAllDishes").text('Average prep time: '+avgTimeAllDishes+' minutes.');

// when button is clicked, filter dishes with prep time less than 10 mins and randomly display one
$("#fastDishes").click(function () {
  showRecipe(objArr.filter(function (i){
    return i.prepTime <= 10;
  }));
});

// when button is clicked, filter the vegetarian dishes and randomly display one
$("#vegDishes").click(function() {
  showRecipe(objArr.filter(function (i){
    return i.veg === true;
  }));
});

// when button is clicked, filter the vegetarian dishes with prep time less than 10 mins and randomly display one
$("#fastVegDishes").click(function() {
  showRecipe(objArr.filter(function (i){
    return i.prepTime <= 10 && i.veg === true;
  }));
});

// when button is clicked, filter the non-vegetarian dishes and randomly display one
$("#nonVegDishes").click(function() {
  showRecipe(objArr.filter(function (i){
    return i.veg === false;
  }));
});

// when button is clicked, randomly display one
$("#allFood").click(function() {
  showRecipe(objArr);
});

// --------------------------------------------------------------------- //
// By using more efficient array methods such as .filter() and after making the codes DRY, I have arrived with the codes above.
// Codes below are the previous versions of how I create the cick buttons and filter the array.
// --------------------------------------------------------------------- //

// $("#vegDishes").click(function() {
//     var randomIndex = (randomNum(x));
//     var randomOption = x[randomIndex];
//     $("#result").text(randomOption.name);
//     $("#prepTime").text('Prep time: ' +randomOption.prepTime+' mins');
//     var recipeString = randomOption.steps.join(' ');
//     $("#recipe").text('Recipe: '+recipeString);
//   })

// $("#fastVegDishes").click(function() {
//     var randomIndex = (randomNum(fastVegDishes));
//     var randomOption = fastVegDishes[randomIndex];
//     $("#result").text(randomOption.name);
//     $("#prepTime").text('Prep time: ' +randomOption.prepTime+' mins');
//     var recipeString = randomOption.steps.join(' ');
//     $("#recipe").text('Recipe: '+recipeString);
//  })

// $("#nonVegDishes").click(function() {
//     var randomIndex = (randomNum(nonVegDishes));
//     var randomOption = nonVegDishes[randomIndex];
//     $("#result").text(randomOption.name);
//     $("#prepTime").text('Prep time: ' +randomOption.prepTime+' mins');
//     var recipeString = randomOption.steps.join(' ');
//     $("#recipe").text('Recipe: '+recipeString);
//  })

// $("#allFood").click(function() {
//     var randomIndex = (randomNum(objArr));
//     var randomOption = objArr[randomIndex];
//     $("#result").text(randomOption.name);
//     $("#prepTime").text('Prep time: ' +randomOption.prepTime+' mins');
//     var recipeString = randomOption.steps.join(' ');
//     $("#recipe").text('Recipe: '+recipeString);
//  })

// --------------------------------------------------------------------- //
// function to return an array of dishes that has <10 min prep time.
// --------------------------------------------------------------------- //

// function filFastDishes (array) {
//   var arrFastDishes = [];
//   for (var i = 0; i < array.length ; i++ ) {
//     if (array[i].prepTime <= 10) {
//       arrFastDishes.push(array[i]);
//     }
//   }
//   return(arrFastDishes);
// }
// var fastDishes = (filFastDishes(objArr));

// --------------------------------------------------------------------- //
// Using .filter() method instead
// --------------------------------------------------------------------- //

// functions to filter the food objects array. Less than 10 mins prep time
// create a variable to store the array of food objects which pass the filter
// function filFastDish (element) {
//   return element.prepTime <= 10;
// }
// var fastDishes = objArr.filter(filFastDish);

// --------------------------------------------------------------------- //
// Shorten by passing anonymous filter function as a call back instead
// --------------------------------------------------------------------- //
// var fastDishes = objArr.filter(function (i){
//   return i.prepTime <= 10;
// });
// var vegDishes = objArr.filter(function (i){
//   return i.veg === true;
// });
// var nonVegDishes = objArr.filter(function (i){
//   return i.veg === false;
// });
// var fastVegDishes = objArr.filter(function  (i){
//   return i.prepTime <= 10 && i.veg === true;
// });
