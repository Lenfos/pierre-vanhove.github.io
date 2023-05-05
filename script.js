let openDiv = false;

let divToOpen = document.querySelector('.projectDiv');
console.log(divToOpen.id);
divToOpen.addEventListener("click", showText, false);
function showText(){
    if (this.onclick === true && openDiv === false){
        openDiv = true;
        this.style.overflow = 'visible';
        this.style.height = 'auto';
        console.log("click");
    }

}