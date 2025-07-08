// 1st Challenge
// Create a mock user json object.
// It should include the following:
//     At least 3 (three) users
//   User objects should include the following data:
//     Id
//     Name
//     Email
//     Password
// Use an array method to log a templated user greeting for each user

const users = [
  {
    id: 1,
    name: "Stephanie",
    email: "stephanie@email.com",
    password: "password123",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    password: "bobbert",
  },
  {
    id: 3,
    name: "John",
    email: "johndoe@email.com",
    password: "newpassword",
  },
];

users.forEach((user) => {
  console.log(`Hello, ${user.name}, your email is ${user.email}`);
});

// 2nd Challenge
// In class we built an xmlhttprequest function.
// In this exercise you will "promisfy" the xmlhttprequest function (which means it will return a promise).
// Your promisified function will do the following:
//   Appropriately resolve and reject that promise
//   Store the promise in a variable
//   Catch any errors
//   Contain at least 2 (two) then statements
//     1st then statement will log the data
//     2nd then statement will log a specific data point
//   Fetch data from the SWAPI API https://swapi.tech. (Documentation found at https://swapi.tech./documentation)
//   Make the "promisfy" using dynamic features including:
//     Alerts
//     Prompts
//     And any other dynamic feature we either covered or did not cover in class.

function getPlanet(id) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://www.swapi.tech/api/planets/${id}`);
    xhr.responseType = "json";

    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject("Error");
    };
    xhr.send();
  });
}

const planetId = prompt(
  "Enter the Star Wars planet ID (1 for Tatooine, etc.):"
);

getPlanet(planetId)
  .then(function (data) {
    alert("Planet data retrieved successfully!");
    console.log(data);
    return data;
  })
  .then(function (data) {
    alert("Planet name: " + data.result.properties.name);
    console.log("Full planet details:", data.result.properties);
  })
  .catch(function (error) {
    alert(error);
    console.error(error);
  });
