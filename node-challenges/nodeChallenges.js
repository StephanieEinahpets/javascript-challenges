// 1st Challenge //
// Make a function that will dynamically create a heading tag between h1-h6.
// Your function should:
// take two properties: heading size and heading text
// return a heading element with the text included
// Write a render function that will append an element to the Document Object Module (DOM)
// ADDITIONAL PRACTICE: Use a class to append an element to the DOM.

function createHeading(size, text) {
  const heading = document.createElement(size)
  heading.innerText = text
  return heading
}

function renderToDOM(element) {
  document.body.appendChild(element)
}
const myHeading = createHeading("h3", "DOM was here")
renderToDOM(myHeading)

// 2nd Challenge //
// Navigate to google.com and search any topic. Open the console and use JS to grab every tag on the document.
// Loop through and log each individual tag. Then log every of one element (div, li, h1, etc..)

// const allElements = document.querySelectorAll("*");
// allElements.forEach((element) => console.log(element.tagName));
// console.log(document.querySelector("div"));
//
//

// 3rd Challenge //
// The true power of front-end development occurs when HTML, CSS and JS are coded into the same program.
// Because each has its unique purpose we can solve more complex challenges when they synchronize.
// In this challenge you will place text using JS into a table already created and styled using HTML and CSS.
// Complete the following steps in HTML:
//  -Create a table with one row and three columns on the starter code provided below.
//  -Add the appropriate HTML strucutre to the starter code to achieve the desired layout.
//  -Center the row on the top of the page. Set to the desired height and width.
// Complete the following steps in CSS:
//  -Set each of the 3 (three) created columns in your layout to have a different:
//  -Background color
//  -Text color
// Complete the following steps in JS:
//  -Add the background color hex code value as text in each of the three available cells.
document.querySelector(".col1").innerText = "#03fac0"
document.querySelector(".col2").innerText = "#4682b4"
document.querySelector(".col3").innerText = "#4346fc"
