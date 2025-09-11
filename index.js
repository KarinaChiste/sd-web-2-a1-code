"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
let namesList = document.getElementById("names-list")
for (let i = 0; i<users.length; i++){
  console.log(users[i].name)
  namesList.innerHTML += `<li>${users[i].name}</li>`
}


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
let youngCharactersList = document.getElementById("young-characters-list")
for (let i = 0; i<users.length; i++){
  if(users[i].age <40){
    console.log(users[i].name)
    youngCharactersList.innerHTML += `<li>${users[i].name}</li>`
  }
  
}

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
let functionList = document.getElementById("function-list")

function CharacterList(characters){
  let characterListOutput ="";
  for (let i = 0; i<characters.length; i++){
    characterListOutput+= `<li>${characters[i].name}</li>`;
    
  }
  return characterListOutput;
}
functionList.innerHTML = CharacterList(users)

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
let ageFilterList = document.getElementById("age-filter-list");
function AgeList(characters, age){
  let ageFilterListOutput = "";
  for (let i = 0; i<characters.length; i++){
    if(characters[i].age <age){
      ageFilterListOutput+= `<li>${characters[i].name}</li>`
    }
    
  }
  return ageFilterListOutput
}
ageFilterList.innerHTML = AgeList(users,60);

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
let errorMessages = document.getElementById("error-messages")
let errorHandlingList = document.getElementById("error-handling-list")

const brokenUsers = [
  { id: 1, username: "Luke Skywalker", age: 23 },
  { id: 2, username: "Darth Vader", age: 45 },
  { id: 3, username: "Princess Leia", age: 23 },
  { id: 4, username: "Obi-Wan Kenobi", age: 57 },
  { id: 5, username: "Yoda", age: 900 },
  { id: 6, username: "Han Solo", age: 32 },
  { id: 7, username: "Chewbacca", age: 234 },
  { id: 8, username: "R2-D2", age: 33 },
  { id: 9, username: "C-3PO", age: 112 },
  { id: 10, username: "Padmé Amidala", age: 27 },
];

function ErrorHandlingCharacterList(characters){
  
  try {
    let errorCharacterListOutput ="";

    for (let i = 0; i<characters.length; i++){
      
      if(characters[i].name == undefined){
        
        
        throw new Error ("Error message!");
      }
      errorCharacterListOutput+= `<li>${characters[i].name}</li>`;
      
    }
    errorMessages.style.display = 'none';
    return errorCharacterListOutput;
  } catch (error) {
    console.log(error.message)
    return error.message
  }
 
}
errorHandlingList.innerHTML = ErrorHandlingCharacterList(users)

function ErrorHandlingAgeList(characters, age){
 
  try {
    let errorAgeFilterListOutput = "";
    for (let i = 0; i<characters.length; i++){
      if(characters[i].name == undefined){
        
        
        throw new Error ("Error message!");
      }
      if(characters[i].age <age){
        errorAgeFilterListOutput+= `<li>${characters[i].name}</li>`
      }
      
    }
    return errorAgeFilterListOutput
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}


// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

let brokenArrayErrors = document.getElementById("broken-array-errors")
brokenArrayErrors.innerHTML = ErrorHandlingCharacterList(brokenUsers)