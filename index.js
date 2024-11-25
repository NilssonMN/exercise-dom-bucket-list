

[1]
/*Create a <p> using the createElement method. When you have a reference to your new element, change its innerText to something that you would like to have on your bucket list, 
and then append it to the DOM with the appendChild method. Where does this element go? How can you get it do be added directly after the already existing <p>.
*/
const newP = document.createElement("p");
newP.innerText = "earn 2 million dollars";

const listSection = document.querySelector(".list");

listSection.appendChild(newP);

/*
[2]
Create another <p> with an item you would like to have on you bucket list. This time add it to the DOM, right after your existing <p>-tags 
with the help of the insertAdjecentElement method. This method accepts a position argument. Which value should that argument have?
*/
const newPP = document.createElement("p");
newPP.innerText = "Earn 3 million dollars";

const existingP = document.querySelector(".list p");

existingP.insertAdjacentElement("afterend", newPP)


/*
[3]
innerHTML is an interesting property that exists on HTML elements. With that property we can get and set the inner HTML of a HTML element very easy. 
Try to get (or do you already have it?) the inner HTML from the element that contains all the <p>-tags of your bucket list. Log that to the console.
*/
const getInnerHtml = document.querySelector(".list");
if (getInnerHtml) {
    console.log(getInnerHtml.innerHTML);
} else {
    console.error("The element with the class 'list' was not found.");
}

/*
[4]
In order to set the innerHTML of an element we need to create a string that contains the HTML 
code that we want to add to the DOM. It can look something like this: "<div>This is a div element as a string</div>";
Now create that string that contains a new item that you want to add to your bucket list.
*/

/*
const newInnerHtml = "<section>earn 4 million dollars</section>";
const pString = document.querySelector(".list");

if (pString) {
    pString.innerHTML += newInnerHtml;
} else {
    console.error("The element with the class 'list' was not found.");
}*/


/*
[5]
Set the innerHTML of the list with the new item you just created. What happens when you do that?
*/
//pString.innerHTML = newInnerHtml;

/*
[6]
Comment out that previous line(s) of code and the three items that you had before you should exist again. How can you add that last item and still keep the three other ones?
 There is a method that is very similar to the
  insertAdjecentElement that will take your HTML string and add it to the list. Try to add your new item to the beginning of the list.
  */
  const newInnerHtml = "<p>earn 4 million dollars</p>";
  const pString = document.querySelector(".list");
  
  if (pString) {
      pString.insertAdjacentHTML("afterbegin", newInnerHtml);
  } else {
      console.error("The element with the class 'list' was not found.");
  }

  /*
  [7]
  Add three more items to the end of list, but try and do it with a loop instead. Less repetitive code.
  */

const newItems = [
    "<p>earn 5 million dollars</p>",
    "<p>earn 6 million dollars</p>",
    "<p>earn 7 million dollars</p>"
];
const bucketList = document.querySelector(".list");

if (bucketList) {
    for (const item of newItems) {
        bucketList.insertAdjacentHTML("beforeend", item);
    }
} else {
    console.error("The element with the class 'list' was not found.");
}

/*
[8]
How many items do you have in your bucket list now? Log it to the console. Use the children property.
*/
const list = document.querySelector(".list");  
const children = list.children; 

console.log(children);  
console.log(children.length); 

for (let i = 0; i < children.length; i++) {
    console.log(children[i].textContent);  
}

/*
[9]
Change the content of the h2 at the to top of the HTML document do have your name instead of "Bucky's";
*/

const newName = document.querySelector(".owner");
newName.innerText = "Nilsson";

/*
[10]
Replace the first item in your list with a new item. There are several ways to do this, but try the replaceChild method out.
*/

const firstElement = document.querySelector(".list");

const newString = document.createElement("p");
newString.textContent = "earn 10 million dollars";

firstElement.replaceChild(newString, firstElement.firstElementChild);

/*
[11]
Now try replace an element in the middle of the list to a new one. Use the same method as before or get creative.
*/

const middleElement = document.querySelector(".list");

const newMString = document.createElement("p")
newMString.textContent = "i replaced in the middle of the lsit";

middleElement.replaceChild(newMString, middleElement.childNodes[5])

/*
[12]
Remove the last element in the list. lastChildElement combine with the removeChild method might work.
*/
const lastElement = document.querySelector(".list");

const stringLast = document.createElement("p");
stringLast.textContent = "earn 11 million dollars";

lastElement.replaceChild(stringLast, lastElement.lastElementChild);









