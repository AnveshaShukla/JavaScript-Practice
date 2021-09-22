console.log("MERGED CLASS 2 ES6")

let ranks=[1,2,3,4,5,6];
// const newArr = ranks.map((e)=>e+1);
// console.log(newArr);

let newfilterarr=ranks.filter((e, index) =>
{
  if(e%2===0)
    return e;
})
console.log(newfilterarr);