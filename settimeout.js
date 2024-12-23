
// let running = true; // Flag to control the execution

// const customInterval = () => {
//   if (!running) return; // Exit if the flag is false

//   console.log("This message repeats every 1 second.");

//   // Schedule the next call
//   setTimeout(customInterval, 1000);
// };

// // Start the custom interval
// customInterval();

// // Stop the custom interval after 5 seconds
// setTimeout(() => {
//   running = false; // Update the flag to stop the loop
//   console.log("Interval stopped.");
// }, 5000);






// settimeot 

// setTimeout(() => {


// console.log("set time out activated");



  
// }, 3000);

console.log("kjeiji");

let value=true
setInterval(()=>{

  if (value) {
    
    console.log("again");
    
    
  } else {
    
       return

  }


},1000)


setTimeout(()=>{

  value=false

},4000)


let i=0;
function loop() {

 i=i+1

  console.log(i);

  if (i==5) {
    return
  }

  loop()

  
  
}

loop()







