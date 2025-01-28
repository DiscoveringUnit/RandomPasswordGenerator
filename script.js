const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
    "v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Remove the unwanted character (e.g. ",")
const filteredCharacters = characters.filter(char => char !== ',');


let outputEL1 = document.getElementById('output-el1')
let outputEL2 = document.getElementById('output-el2')
let userPass1 = []
let userPass2 = []
let passLengthEL = 10 // default length 

function randomPassword() {

    let passInput = document.getElementById('pass-el').value 
    
    // Check if the input is empty
    if (passInput === "") {
      passLengthEL = 10;  // Default value if input is empty
    } else {
      passLengthEL = parseInt(passInput);  // Parse the input as a number
    }

    // Clear previous password if any
    userPass1 = [];

    // loop for password  1   
       for (let i=0; i < passLengthEL; i++) {
            let randomIndex = Math.floor(Math.random() * filteredCharacters.length);
            userPass1.push(filteredCharacters[randomIndex]);
        }
        
    // Clear previous password if any
    userPass2 = [];

    // loop for password 2    
       for (let i=0; i < passLengthEL; i++) {
            let randomIndex = Math.floor(Math.random() * filteredCharacters.length);
            userPass2.push(filteredCharacters[randomIndex]);
        }

  outputEL1.textContent = userPass1.join('');
  outputEL2.textContent = userPass2.join('');
          
 }


