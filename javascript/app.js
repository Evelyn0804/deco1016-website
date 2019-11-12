//The hamberger menu
function showMenu() {
    var menu = document.getElementsByClassName('nav-menu')[0]
    var burger = document.getElementsByClassName('burger')[0]
    //change from hamberger to X or change back
    burger.classList.toggle("change");

    //show or hide the menu
    if (menu.style.transform === "translateX(0%)") {
        menu.style.transform = "translateX(-100%)"
    } else {
        menu.style.transform = "translateX(0%)"
    }

}


function greeting() {
    var firstname = document.getElementById("first-name");
    var title = document.getElementsByClassName("form-title")[0];
    document.getElementsByClassName("form-title")[0].innerHTML = firstname.value + '! Welcome to join us!';
    title.style.fontSize = "4vh";
}