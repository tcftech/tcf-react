// Simulating an asynchronous operation using a promise
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//       console.log("Fetching data...");
  
//       setTimeout(() => {
//         const success = false; // Change to `false` to simulate failure
  
//         if (success) {
//           resolve("Data fetched successfully!");
//         } else {
//           reject("Failed to fetch data.");
//         }
//       }, 2000); // Simulates a delay of 2 seconds
//     });
//   };





  
  // // Using the promise
  // fetchData()
  //   .then((data) => {
  //     console.log(data); // Logs: "Data fetched successfully!"
  //   })
  //   .catch((error) => {
  //     console.error(error); // Logs: "Failed to fetch data." (if rejected)
  //   })
  //   .finally(() => {
  //     console.log("Fetch operation complete."); // Always executes
  //   });

  // let value=false

  // const promise=new Promise((res,rej)=>{

  //   if (value) {

  //       res({data:"data fetched succes fully "})
    

  //   } else {

  //     rej({data:"data rejected succes fully "})
     
  //   }

  //   // setTimeout(()=>{
  //   //   res("ok")
  //   // },2000)

  // });

  // console.log(promise);

  // promise.then(res=>console.log(res)
  // ).catch(res=>{

  //   console.log(res);
    
  // })



  const promise=new Promise((res,rej)=>{

    setTimeout(()=>{
      
      res("ok")
      
    },3000)

  })





  // async function example() {

  //  await  promise.then(res=>console.log(res))

  //   console.log("333");

  // }




  // example()



  class example {

    constructor(){
      console.log("constructor activated");
      
    }


    method1(e){
      console.log(e);
      
    }

  }

  // const obj = new example()

  //      obj.method1("dhwdwuw")











  
  
  

    