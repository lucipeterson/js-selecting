// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.getElementById("about");
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different color. **When you are selecting multiple elements, you can't
//change the style of them all at once, you have to loop through them with a for loop to change them.
const headingTwos = document.getElementsByTagName("H2");
for (let i=0;i<headingTwos.length;i+=1){headingTwos[i].style.color = "firebrick";}

// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
const cards = document.querySelectorAll(".card");
for (let i=0;i<cards.length;i+=1){cards[i].style.background = "cornflowerblue";}
// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.
const ul = document.getElementsByTagName("ul")[0];
ul.style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.
const container = document.querySelectorAll(".container")[1];
container.style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
const titleLinks = document.querySelectorAll("a[title]");
for (let i=0;i<titleLinks.length;i+=1){titleLinks[i].style.color = "salmon";}

