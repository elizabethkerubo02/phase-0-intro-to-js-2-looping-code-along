// Code your solutions in this file
let names = ["Alice", "Bob", "Charlie"];
let eventi = "birthday";
let messages = writeCards(names, eventi);
console.log(messages);


function writeCards(namesArray, eventName) {
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
    return messagesArray;
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  countDown(4);
  // for loop 

  
  function countDownn(number) {
    let i = 0;
    while(i >= number);{
        i++
        console.log(i);
    }
    
    
  }
   countDownn(10);
