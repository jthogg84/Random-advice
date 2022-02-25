
    
let button = document.querySelector(".circle");

button.addEventListener('click' , ()=> {
    location.reload(true)
})

async function advice(url){

    let adviceText = document.querySelector('#text')
    let adviceId = document.querySelector('#id')

    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    let advice = JSON.stringify(data.slip.advice);
    let id = JSON.stringify(data.slip.id);
   
    adviceText.innerText =advice;
    adviceId.innerText =id;
    
}

advice('https://api.adviceslip.com/advice')



    
    
