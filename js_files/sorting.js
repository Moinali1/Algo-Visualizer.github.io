
function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

function deletelegends() {
    const legends = document.querySelector(".legends");
    legends.innerHTML = '';
}

function createLegends(details)
{
    deletelegends();

    for(let i=0;i<details.length;i=i+2)
    {
    const Elegends= document.querySelector(".legends");
    const Eleg = document.createElement("div");
    const Elcolor = document.createElement("div");
    const Elegwork = document.createElement("div");

    const node = document.createTextNode(details[i]);
    Elegwork.appendChild(node);
    Elcolor.style.backgroundColor=details[i+1];

    Eleg.classList.add('leg');
    Elcolor.classList.add('lcolor');
    Elegwork.classList.add('legwork');
    Elegwork.classList.add('legwork1');
    
    Eleg.appendChild(Elcolor);
    Eleg.appendChild(Elegwork);
    Elegends.appendChild(Eleg);
    }
}


function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}


function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}


function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// let pauseElement= document.getElementById("pause");
// var timeoutId=0;
function waitforme(milisec) { 
    return new Promise(resolve => { 
       timeoutId= setTimeout(() => { resolve('') }, milisec); 
    }) ;
}


let arraySize = document.querySelector('#arr_sz');


arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

let delay = 700;

// let pauseDelay=2000;


// pauseElement.addEventListener("change",()=>{
//     console.log("In pause");
//     if(pauseElement.checked == true)
//     {
//     console.log("In pause if");
//     pauseDelay=8000;
//     delay = pauseDelay - parseInt(delayElement.value);
//     }
//     else
//     {
//     console.log("In pause else");
//     console.log(timeoutId);
//     pauseDelay=800;
//     delay = pauseDelay - parseInt(delayElement.value);
//     }
// });


let delayElement = document.querySelector('#speed_input');

delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 1000 - parseInt(delayElement.value);
});


let array = [];


createNewArray();

function createNewArray(noOfBars = 28) {
   
    deleteChild();

    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 5);
    }
    console.log(array);

   
    const bars = document.querySelector("#bars");

    for (let i = 0; i < noOfBars; i++) {
            const bar = document.createElement("div");
        bar.style.height = `${array[i]*1.2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}


function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});

const reset=document.querySelector("#ResetBtn");

reset.addEventListener("click",function(){
    enableSortingBtn();
    enableSizeSlider();
    deleteChild();

    deletelegends();

    newArray.disabled=false;
   
    const bars = document.querySelector("#bars");


    for (let i = 0; i < array.length; i++) {
            console.log("working");
            const bar = document.createElement("div");
        bar.style.height = `${array[i]*1.2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
});

const navbar = document.querySelector('.nav-fixed');
const mono = document.querySelector('.logo');
window.onscroll = () => {
    if (window.scrollY > 10) {
        navbar.classList.add('nav-active');
        mono.classList.add('logo-active');
    } else {
        navbar.classList.remove('nav-active');
        mono.classList.remove('logo-active');
    }
};