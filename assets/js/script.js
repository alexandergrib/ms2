document.getElementById('innerWidth').innerHTML = window.innerWidth;
document.getElementById('innerHeight').innerHTML = window.innerHeight;
document.getElementById('outerWidth').innerHTML = window.outerWidth;
document.getElementById('outerHeight').innerHTML = window.outerHeight;

document.getElementById('title').innerHTML = document.title;

document.body.onload = function() {
    console.log('We can call various methods of the body object as well, such as this one, body.onload, which gets called when loading is complete! Now we know that the body has been loaded!');
}








/*Create a variable pElements and assign it a collection of all the elements in the HTML Document using the tag name p
Log the value of the pElements element to the console
Get the second h1 element in the HTML Document by using its tag name
Create a variable secondH1 and assign it the second h1 element in the HTML Document using the tag name h1
Log the value of the secondH1 element to the console*/

let pElements = document.getElementsByTagName('p');
console.log(pElements);

let secondH1 = document.getElementsByTagName('h1').item(1);
console.log(secondH1)






let blueThings = document.getElementsByClassName('blue');

// All items with class="blue"
console.log('The HTMLCollection contains:', blueThings);

// Iterate and print all their texts:
for(let i = 0; i < blueThings.length; i++) {
  console.log('Index ' + i + ' in the collection: ' + blueThings[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", blueThings[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", blueThings.item(3).textContent);

// Get the item with class="blue" and id="specific" and log its tag name:
console.log('The item with id="blue-div" is a', blueThings.namedItem('blue-div').tagName, 'element.');

// The other div is not in the collection since it doesn't have the "blue" class. The namedItem() method returns null
console.log('The item with id="another-blue-div" is', blueThings.namedItem('another-blue-div'));




/*

The HTMLCollection contains: HTMLCollection {
  0: HTMLHeadingElement {},
  1: HTMLParagraphElement {},
  2: HTMLButtonElement {},
  3: HTMLDivElement {} }
Index 0 in the collection: Hello! I'm a blue heading!
Index 1 in the collection: I'm a blue paragraph. I also have the blue class.
Index 2 in the collection: Blue buttons will be found too
Index 3 in the collection:
      I'm a div with both a class and an id.

Index 2 is: Blue buttons will be found too
Index 4 is:
      I'm a div with both a class and an id.

The item with id="blue-div" is a DIV element.
The item with id="another-blue-div" is null
   */




let mainDiv = document.getElementById('main-div');  // First get the div itself

let parent = mainDiv.parentNode;  // the div's parent element
let children = mainDiv.children;  // the div's children
let firstChild = mainDiv.children[0];  // the div's first child
let nextSibling = mainDiv.nextElementSibling;  // the next element at the same nesting level
let prevSibling = mainDiv.previousElementSibling;  // the previous element at the same nesting level


/*
.parentNode: Gets the current element's parent node. If the current element is anything other than <html>, this property will return the element's parent element.
Otherwise, it will return the document object.
.children: Returns an HTMLCollection of the elements children (anything nested within it in the DOM tree).
.nextElementSibling/.previousElementSibling: Finds the next sibling/previous sibling of the given element, i.e. the closest one at the same nesting level in the DOM tree.
 */



/*
Study the following in order to understand how to navigate up/down/sideways in the DOM!
*/


// Get the main div and footer divs
let main = document.getElementById('main-div');
let footer = document.getElementById('footer-div');

// First child of the main div is the title div
let titleDiv = main.children[0];
console.log(titleDiv);

// First child of the recipe-title div is the h1
let recipeTitle = titleDiv.children[0];
console.log('Recipe is called:', recipeTitle.textContent);

// Next sibling of the title div is the ingredients div
let ingredientsDiv = titleDiv.nextElementSibling;
console.log(ingredientsDiv);

// And its first child is a <ul> w/ the ingredients:
let ingredientList = ingredientsDiv.children[0];
console.log(ingredientList);

// Now we can get its children and iterate though them:
let allIngredients = ingredientList.children;
for(let i = 0; i < allIngredients.length; i++) {
    console.log('Ingredient', i, 'is', allIngredients[i].textContent);
}

// Parent of the main-div is <body>
console.log(main.parentNode);

// and its sibling is the footer-div
console.log(main.nextElementSibling);

// So we could combine all of these to get the footer text easily, even if it had no id/class
let footerText = main.parentNode.children[1].children[0].textContent;
console.log('Footer text is:', footerText);

// Of course, since it has an id, you can also do this to access it directly
footerText = document.getElementById('footer-div').children[0].textContent;
console.log('Footer text (alternative method) is:', footerText);

let box = document.getElementById('main-box');

// All the box's content
console.log(box.innerHTML);

// You can use window.getComputedStyle and pass it an element to get that element's styles as a list of key/value pairs
console.log("The box's shadow:", window.getComputedStyle(box).boxShadow);
console.log("The box's border", window.getComputedStyle(box).border);
console.log("The box's border radius", window.getComputedStyle(box).borderRadius);

// The box's height and width
console.log('Box height is:', box.clientHeight);
console.log('Box width is:', box.clientWidth);

// The main heading
let heading = box.children[0];

// The heading's classes
console.log(heading.classList);

// The input box
let username = document.getElementById('username-input');

// All the input's attributes
console.log(username.attributes);

// To get their name/value, we must iterate
let attrs = username.attributes;
for (let i = 0; i < attrs.length; i++) {
    console.log('Attr name:', attrs[i].name, '- Attr value:', attrs[i].value);
}


/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/
function replace() {
    document.write('<h1>Hello!</h1>');
    document.write("Today is ", Date());
    document.write('<p>Each call to <code>document.write()</code> is appended in order to the document, without newlines.</p>');
    document.write('<p>Notice the css for the &lt;code&gt; tag isn\'t working anymore...</p>');
    document.write('<p>That\'s because the whole document was replaced, including the link to the css file!</p>');

    document.write('The calls above are on new lines because they\'re writing paragraphs and headings. If writing plaintext...');
    document.write('notice that this method will NOT append a new line after each statement.');
    document.write('<br><br>To do that, you can use break tags');
}


function update() {
    let box = document.getElementById('main-box');
    box.style.width = "300px";

    let paragraph = document.getElementsByClassName('special')[0];
    paragraph.removeAttribute('class');

    let emptyBox = document.getElementById('empty-box');
    emptyBox.innerHTML = "<h2>I'm not empty anymore!</h2>"
    emptyBox.style.width = "300px";
    emptyBox.style.backgroundColor = "yellow";
}

function turnOff() {
    button = document.getElementById('switch');
    button.style.backgroundColor = "red";
    button.textContent = "OFF";  //Change text inside button element
}




function createShoppingList() {
    // Get the document body (just for convenience)
    let body = document.body;

    // Create a new heading
    let newHeading = document.createElement("h3");

    // Set its innerHTML
    newHeading.innerHTML = "Shopping List:";

    // Add it to the body
    body.appendChild(newHeading);

    // Now make the new list
    let shoppingList = document.createElement('ul');

    // Create an array of items to add
    let shoppingItems = ['Milk', 'Butter', 'Eggs'];

    // Loop through the array and create <li> elements
    for (let i = 0; i < shoppingItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = shoppingItems[i];
        shoppingList.appendChild(listItem);
    };

    // Now append the whole new list to the body
    body.appendChild(shoppingList);

    // When shopping is completed, clear out the shopping list and add the purchased items to kitchen stock
    let button = document.createElement('button');
    button.innerHTML = "Finished Shopping";

    // Set the onclick attribute to call the addToKitchenStock() function below
    button.setAttribute('onclick', 'addToKitchenStock();');

    // Append it to the body
    body.appendChild(button);
}


function addToKitchenStock() {
    // First remove the shopping list heading
    let shoppingListHeading = document.getElementsByTagName('h3')[1];
    shoppingListHeading.remove();

    // Get both lists, then iterate through the shopping list's children (the <li> elements), cloning each item and appending it to the kitchen stock list
    let kitchenStock = document.getElementsByTagName('ul')[0];
    let shoppingList = document.getElementsByTagName('ul')[1];
    for (let i = 0; i < shoppingList.children.length; i++) {
        let clone = shoppingList.children[i].cloneNode(true)
        kitchenStock.appendChild(clone);
    }

    // Remove the old shopping list and the buttons
    shoppingList.remove();
    let i = 0;
    while (i < 2) {
        /* This removes the first button in the document each time.
        We need to do it this way since once we delete the first
        one, the 2nd one's index is now 0 */
        document.getElementsByTagName('button')[0].remove();
        i++;
    };

    // Insert a completion note at the top
    let complete = document.createElement('p');
    complete.innerHTML = "Shopping complete!"
    complete.style.color = "red";
    complete.style.fontWeight = "bold";
    let kitchenStockHeading = document.getElementsByTagName('h3')[0];
    document.body.insertBefore(complete, kitchenStockHeading);
}




function addSquare (){
    let body = document.body;
    let div = document.createElement('div');
    div.classList.add("square");
    body.appendChild(div);
    document.getElementById("squares-wrapper").appendChild(div);
}

function removeSquare(){
    let square = document.getElementsByClassName('square')[0];
    square.remove();
}

function addSquare() {
    let squaresWrapper = document.getElementById('squares-wrapper');
    let square = document.createElement('div');
    square.classList.add("square");
    squaresWrapper.appendChild(square);
}

function removeSquare() {
    // It was not part of the challenge, but did you consider what would happne if
    // you clicked the delete button when there were no blue squares to remove.
    // If you did try it, did you show an error in the console?

    // The if statement below checks how many elements are within the div with the id of squares-wrapper
    // And if there are 0 it does not enter the body of the if to run the remove code
    // And no error will occur
    let children = document.getElementById('squares-wrapper').children.length;
    if(children) {
        document.getElementsByClassName('square')[0].remove();
    }
}





function createShoppingList() {
    // Create a div to hold everything
    let shoppingListDiv = document.createElement('div');

    // Set the div's innerHTML to the shopping list
    // Notice the use of backticks (``) to create a multiline string
    shoppingListDiv.innerHTML = `
        <h3>Shopping List:</h3>
        <ul>
            <li>Milk</li>
            <li>Butter</li>
            <li>Eggs</li>
        </ul>
    `;

    // Find the first button and insert the div before it
    let firstList = document.getElementsByTagName('button')[0];
    document.body.insertBefore(shoppingListDiv, firstList);

}



function tomorrowReport() {
    document.getElementById('report').innerHTML = `
        <h4>Tomorrow</h4>
        <p>Partly cloudy</p>
        <ul>
            <li>Temp: 27C</li>
            <li>Precipitation: 20%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13km/h</li>
        </ul>
    `;
}


function todayReport (){
    let reportDiv = document.getElementById('report');
    reportDiv.innerHTML = `
        <h4>Today</h4>
        <p>Scattered thunderstorms</p>
        <ul>
            <li>Temp: 29C</li>
            <li>Precipitation: 25%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 16km/h</li>
        </ul>
    `;
    let insertReport = document.getElementById('report');
    document.body.insertBefore(reportDiv, insertReport);
}


function tomorrowReport (){
    let reportDiv = document.getElementById('report');
    reportDiv.innerHTML = `
        <h4>Tomorrow</h4>
        <p>Partly cloudy</p>
        <ul>
            <li>Temp: 27C</li>
            <li>Precipitation: 20%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13km/h</li>
        </ul>
    `;
    let insertReport = document.getElementById('report');
    document.body.insertBefore(reportDiv, insertReport);
}




function changeBox() {
    console.log("Changes incoming!");

    // Get the div
    let lowlyDiv = document.getElementById('lowly-div');

    /* We can check the box to determine its width and
    change colors accordingly. 120 = 100px + 10px padding
    on each side. Check style.css */

    if (lowlyDiv.clientWidth === 120) {
        // Change its background color and width
        lowlyDiv.style.backgroundColor = "lightgreen";
        lowlyDiv.style.width = '200px';
    } else {
        // Change it back to normal
        lowlyDiv.style.backgroundColor = "lightyellow";
        lowlyDiv.style.width = '100px';
    }
}


function changeCards(){

    for (let i=0; i < document.getElementsByClassName('card').length; i++){
        document.getElementsByClassName('card')[i].style.backgroundColor = "red";
        console.log(i);
    }

}



//<div onmouseenter="turnPink(event);" onmouseleave="turnYellow(event);" id="box">When the mouse enters I should turn pink. When the mouse leaves I should turn yellow.</div>
function turnPink (event){
    document.getElementById('box').style.backgroundColor = "lightpink";
}

function turnYellow (event){
    document.getElementById('box').style.backgroundColor = "yellow";
}



document.onload = console.log('The document has loaded!');

function bodyLoaded() {
    console.log('Body has loaded!');
}



function keyPressed(event) {
    let keyInfo = document.getElementById('key-info');
    keyInfo.innerHTML = event.key;

}


// Note: We pass the event to the function to get info about it!
function handleKeys(event) {
    let pressedDiv = document.getElementById('key-pressed');
    let downDiv = document.getElementById('key-down');
    let upDiv = document.getElementById('key-up');
    let currentKeySpan = document.getElementById('current-key');
    let lastKeySpan = document.getElementById('last-key');

    if (event.repeat) {
        return false;  // prevents holding the key from triggering the event again
    } else {
        if (event.type === 'keydown' || event.type === 'keypress') {
            downDiv.style.backgroundColor = 'lightgreen';
            pressedDiv.style.backgroundColor = 'lightgreen';
            currentKeySpan.innerHTML = event.key + ' (' + event.code + ' / ' + event.keyCode + ')';
        } else if (event.type === 'keyup') {
            currentKeySpan.innerHTML = '';
            downDiv.style.backgroundColor = 'white';
            pressedDiv.style.backgroundColor = 'white';
            upDiv.style.backgroundColor = 'lightgreen';

            // This just changes the upDiv back to white after 75ms
            setTimeout(function() {
                upDiv.style.backgroundColor = 'white';
            }, 75);

            lastKeySpan.innerHTML = event.key + ' (' + event.code + ' / ' + event.keyCode + ')';
        }

    }
}











<button id="my-button">Click me!</button>


function myFunction (event) {
  console.log('You clicked the button!');
  console.log(this.id);  // my-button
}

let myButton = document.getElementById('my-button');
myButton.addEventListener('click', myFunction);





function handleBtnClick (event) {
  console.log('Received the ' + event.type + " event!");
  console.log('"this" currently refers to', this.id);
  console.log('You clicked the button!\n');
}

function handleInputKeys (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You changed the textbox!\n');
}

function handleDivMouseOver (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You moved the mouse over the div!\n');
}

let magicButton = document.getElementById('magic-button');
let magicDiv = document.getElementById('magic-div');
let magicInput = document.getElementById('magic-input');

magicButton.addEventListener('click', handleBtnClick); // left clicks
magicButton.addEventListener('contextmenu', handleBtnClick); // right clicks
magicDiv.addEventListener('mouseover', handleDivMouseOver); // mouseovers
magicInput.addEventListener('keypress', handleInputKeys); // key presses
magicInput.addEventListener('keydown', handleInputKeys); // key down
magicInput.addEventListener('keyup', handleInputKeys); // key up

//-------------------------

let box = document.getElementById("box");

function changeBorder() {
    box.style.borderColor = "grey";
}

function changeBackground() {
    box.style.backgroundColor = "pink";
}

function revertBack() {
    box.style.borderColor = "white";
    box.style.backgroundColor = "lightblue";
}

// Write your code here
box.addEventListener('click', changeBorder); // left clicks
box.addEventListener('mouseover', changeBackground); // mouseovers
box.addEventListener('mouseleave', revertBack); // mouseovers

//-------------------

let box = document.getElementsByClassName('box');


function boxClicked(){
    if (this.style.backgroundColor === "orange") {
        this.style.backgroundColor = "green";
    }
    else {
        this.style.backgroundColor = "orange";
    }
}

for (let i=0; i < box.length; i++){

    box[i].addEventListener('click', boxClicked); // left clicks
}
