const passwordLength = document.querySelector('#length');
const symbolPswd = document.querySelector('#symbol');
const numberPswd = document.querySelector('#numbers');
const alphaPswd  = document.querySelector('#uppercase');
const genBtn     = document.querySelector('button');

const passwords  = document.querySelectorAll('.passwords p');


  function getRandomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min)) + min ;
  }

  function randomLower() {
    return lowercase[ getRandomNumbers(0, lowercase.length)];
  }

  function randomUpper() {
    return uppercase[ getRandomNumbers(0, uppercase.length)];
  }

  function randomNumbers() {
    return numeric[ getRandomNumbers(0, numeric.length)];
  }

  function randomSymbol() {
    return symbols[ getRandomNumbers(0, symbols.length)];
  }

  function randomChars() { 
    return char [ getRandomNumbers(0, char.length)];
  }

            // Display or Render Generated Password

  function displayPswd() {
      for(let i = 0; i < passwords.length; i++ ){
      passwords[i].textContent = generatePassword();
    }
  }

  function generatePassword() {

      let password = [];
        password.push(randomLower());

      if(hasSymbol) {
        password.push(randomSymbol());
        char += symbols;
      }
      
      if(hasNumber) {
        password.push(randomNumbers());
        char += numeric;
      }

      if(hasUpperCase) {
       password.push(randomUpper());
       char += uppercase;
       
      }

      for(let i = password.length; i < length; i++) {

        setTimeout(function() {
          document.querySelector('.loading').style.display = "none";
        }, 1500);
    
        password.push(randomChars());
      }
      password.sort(()=> Math.random() - 0.5);
      return password.join("");
  }


  function processInput() {
    length = passwordLength.value;
    hasSymbol = symbolPswd.checked;
    hasNumber = numberPswd.checked;
    hasUpperCase = alphaPswd.checked;
    
   

    document.querySelector('.loading').style.display = "block";

    setTimeout(function() {
      document.querySelector('.loading').style.display = "none";
    }, 1500);

    setTimeout(displayPswd, 1500);
  }

    // Copy Generated Password to Clipboard

  function copy(element) {
    navigator.clipboard.writeText(element.innerText);
      document.querySelector('.copy').style.display = "block";

      setTimeout(function() {
        document.querySelector('.copy').style.display = "none";
      }, 2000)
  }  

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric   = "0123456789";
  const symbols = " ~'!@#$%^&*()_+={[}]:|;<>?/'\"\\' ";

  let char = lowercase;


  let length = null;
  let hasSymbol = null;
  let hasNumber = null;
  let hasUpperCase = null;

  genBtn.addEventListener('click', processInput);