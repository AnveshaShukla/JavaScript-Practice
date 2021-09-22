// console.log("MERGED CLASS 2 ES6")

// let ranks=[1,2,3,4,5,6];
// const newArr = ranks.map((e)=>e+1);  //Map method
// console.log(newArr);

// let newfilterarr=ranks.filter((e, index) =>  //Filter method
// {
//   if(e%2===0)
//     return e;
// })
// console.log(newfilterarr);

let concert=false;     //PROMISE
let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() =>{
    if(concert){
        resolve("BOB ATTENDED THE EVENT");
    }
    else{
        reject("BOB FAILED TO ATTEND THE EVENT");
    }
    }, 2000);
});
console.log(attendConcert);

// attendConcert.then((data) =>console.log(data));  //then method, you can  use any variable
// attendConcert.catch((error) =>console.log(error));  //catch method you can  use any variable

const func=async()=>                //async and await;try and catch
{
    try{
        let result=await attendConcert;
        console.log(result);
    }
    catch(e){
        console.log(e)
    }
}
func()
console.log("function is:", func())
 
