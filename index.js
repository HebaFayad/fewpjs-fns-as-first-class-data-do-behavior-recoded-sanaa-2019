/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
console.log(andleClick(1))

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let splitting = time.split(":");
  let parsing = parseInt(splitting);



  if (parsing < 12) {
    return "Good Morning";
  }
  else if (parsing >= 12 && parsing <= 17) {  //17 is 5pm
    return "Good Afternoon";
  }
  else if (parsing >= 18 && parsing <= 24) {
    return "Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(res) {
  document.querySelector("#greeting").innerText = res;


}