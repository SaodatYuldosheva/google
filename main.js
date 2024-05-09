let div = document.querySelector(`.links`);
let box1 = document.querySelector(`.box1`);
let boxs = document.querySelector(`.boxs`);

div.addEventListener(`click`,()=>{
    if(boxs.classList.contains(`new`)){
        boxs.classList.remove(`new`);
        box1.classList.add(`new`);
    } else{
        boxs.classList.add(`new`);
        box1.classList.remove(`new`);
    }
});