

const userAge = prompt('How old are You?', 0);

const userAgeInt = parseInt(userAge);


if(userAgeInt >= 18) {
    
    alert('You are adult! Gratulations!');
   
} else {
  
    const leftAge = 18 - userAge;
    alert('Years left to adult: ' + leftAge);
   
}

