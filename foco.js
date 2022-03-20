function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    } else {
        image.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
}
function changeOn(){
    var button = document.getElementById('myImage2');
    button.src = "https://www.w3schools.com/js/pic_bulbon.gif";
}

function changeOff(){
    var button2 = document.getElementById('myImage2');
    button2.src = "https://www.w3schools.com/js/pic_bulboff.gif";
}
