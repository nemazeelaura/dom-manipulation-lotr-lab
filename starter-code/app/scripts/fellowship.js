console.log("Linked.");
// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middleEarth");

  for (var i = 0; i < lands.length; i++) {
    var currentLand = document.createElement("article");
    var name = document.createElement("h1");
    middleEarth.appendChild(currentLand);
    currentLand.appendChild(name);
    name.textContent = lands[i];
  }
    // adding element to document.body
    body.appendChild(middleEarth);
}

makeMiddleEarth();

// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  // getting the section tag middle earth by id
  var middleEarth = document.getElementById("middleEarth");
  // get the first child of middle earth h1- the shire
  var shire = middleEarth.firstChild;
  // .document refers to webpage create ul called hobbitlist
  var hobbitList = document.createElement("ul");
  // puts the ul under the shire h1.. another child
  shire.appendChild(hobbitList);

  for (var i = 0; i < hobbits.length; i ++) {

    var hobbit = document.createElement("li");
    hobbitList.appendChild(hobbit);
    hobbit.textContent = hobbits[i];
    // giving each hobbit the class name hobbit
    hobbit.setAttribute("class", "hobbit");
  }

  // console.log(shire);
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var ring = document.createElement("div");
 
  ring.setAttribute("id", "the-ring");
  // console.log(ring);
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute("class", "magic-imbued-jewelry");
  // console.log(ring);
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // get hobbit from doc
  // add the ring as a child of Frodo
  var frodo = document.querySelector('.hobbit');
  // console.log(frodo);
  frodo.addEventListener("click", nazgulScreech);
  
}

keepItSecretKeepItSafe(); 

  
  // Part 4

                                                                
function makeBuddies() {

  var middleEarth = document.getElementById("middleEarth");
  var rivendell = middleEarth.childNodes[1]; // getting rivendell second child
  // console.log(rivendell);
  // create aside tag 
  var sideTag = document.createElement("aside");
  // add aside to rivendell
  rivendell.appendChild(sideTag);  
   // create ul tag
  var buddieList = document.createElement("ul");
  buddieList.setAttribute("id", "blist"); // added id to ul for beautiful stranger
  // adding ul to aside
  sideTag.appendChild(buddieList);   

  for (var i = 0; i < buddies.length; i ++) {
    var buddy = document.createElement("li");   
    buddieList.appendChild(buddy);              // attach an unordered list of the 'buddies' in the aside
    buddy.textContent = buddies[i];             // insert your aside as a child element of rivendell
    buddy.setAttribute("class", "buddy");
  }

  // console.log(rivendell);
}
  

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var buddieList = document.getElementById("blist");
  var strider = buddieList.childNodes[3];
  strider.innerHTML = "Aragorn";
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
   var newLocation = document.querySelectorAll(".hobbit");
   console.log(newLocation);
   // var rivendell = document.querySelectorAll("article")[0];
   // console.log(rivendell);
   var rivendellBuddies = document.getElementById("blist");
   console.log(rivendellBuddies);
   for (var i = 0; i < newLocation.length; i ++) {  
    rivendellBuddies.appendChild(newLocation[i]);              // attach an unordered list of the 'buddies' in the aside
  }

   
}
leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
