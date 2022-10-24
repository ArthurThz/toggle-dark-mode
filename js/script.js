 const txt1 = document.getElementById("txt1");
const btn = document.getElementById("Btn");
const body = document.getElementsByTagName("body")[0];
const img = document.getElementById("img");
const Dark = 'dark-mode';

function ChangeColor(){
    ChangeClass();

    ChangeText();
}
function ChangeText(){
    const lightMode = 'Lights ON';
    const darkMode  = 'Lights OFF';

    if(body.classList.contains(Dark)){
        txt1.innerHTML = darkMode;
        btn.innerHTML = "Turn ON"
        img.setAttribute("src","icon/off.png")
        return;
    }
    
        txt1.innerHTML = lightMode;
        btn.innerHTML = "Turn OFF"
        img.setAttribute("src","icon/on.png")
    }

    function ChangeClass(){
        body.classList.toggle(Dark);
        btn.classList.toggle(Dark)
        txt1.classList.toggle(Dark)
    }
btn.addEventListener('click',ChangeColor)


