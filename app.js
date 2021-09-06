const button=document.querySelector('button')
const element=document.querySelector('body')
console.log(button,element)

button.addEventListener('click', () =>{
    // element.classList.toggle('aqua')
    if(element.classList.contains('dark')){  //replacement of toggle
        element.classList.remove('dark')
    }
    else{
        element.classList.add('dark')
    }
})
