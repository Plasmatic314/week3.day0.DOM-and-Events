document.addEventListener('click', onClick);

function onClick(){
    const imageElement = document.querySelector('img');
    imageElement.src = "assets/Shocked-face.jpg";
    alert('A monster surprise attacked you and you are now encountering a heart attack. :D');

}
