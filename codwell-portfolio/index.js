const selectElement = selector =>{
    const element = document.querySelector(selector)
    if(element){
        return element
    } else{
        throw new Error(`Something went wrong. make sure the ${element} selected is correct`)
    }
}

// Scroll header style
const scrollHeader = () =>{
    const headerElement = selectElement("#header");
    if(this.scrollY >= 15){
        headerElement.classList.add("activated");

    } else{
        headerElement.classList.remove("activated")
    }
}
window.addEventListener("scroll",scrollHeader)
//Menu
const menuToggleIcon = selectElement("#menu-toggle-icon")

const toggleMenu = () => {
    const menu = selectElement("#menu");
    menu.classList.toggle("activated");
    menuToggleIcon.classList.toggle("activated");
}
menuToggleIcon.addEventListener("click",toggleMenu);