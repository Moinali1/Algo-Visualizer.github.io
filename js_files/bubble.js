async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    console.log(ele);
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'rgb(159 213 255)';//light blue
            ele[j+1].style.background = 'rgb(159 213 255)';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                swap(ele[j], ele[j+1]);
                await waitforme(delay);
            }
            ele[j].style.background = 'rgb(38 108 162)';//dark blue
            ele[j+1].style.background = 'rgb(38 108 162)';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
});
