    const details = document.querySelectorAll("details");
    details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
        if (detail !== targetDetail) {
            detail.removeAttribute("open");
        }
    });
});
});

function Rastrear(){
    var x = document.getElementById("active-input").value;
    if (x.length === 13 || x.length === 16) {
    var site = "https://global.cainiao.com/detail.htm?mailNoList="
    var format = site + x;
    window.open(format, '_blank');
    } else {
    document.getElementById("active-input").value = "";

    document.getElementById("active-input").placeholder = "Este código é inválido!";  
}
}

function Botao(x){
    x.setAttribute('style', 'display:none');
    document.getElementById("active-block").setAttribute('style', 'display:block');
    document.getElementById("active-block").setAttribute('style', 'border-color:#f0e800');
    document.getElementById("active-input").select();
    document.getElementById("active-button").setAttribute('style', 'display:block');
}
