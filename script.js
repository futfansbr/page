document.querySelectorAll("#database-product")[0].innerHTML = document.querySelectorAll(".product")[0].getAttribute("name");
document.querySelectorAll("#database-product")[1].innerHTML = document.querySelectorAll(".product")[1].getAttribute("name");
document.querySelectorAll("#database-product")[2].innerHTML = document.querySelectorAll(".product")[2].getAttribute("name");
document.querySelectorAll("#database-product")[3].innerHTML = document.querySelectorAll(".product")[3].getAttribute("name");

document.getElementById("button-medidas").addEventListener("click", function(){
  document.getElementById("popup-align").style.display = "flex";
  document.body.style.overflow = "hidden";
  });

document.getElementById("popup-close").addEventListener("click", function(){
  document.getElementById("popup-align").style.display = "none";
  document.body.style.overflow = "scroll";
  });

  document.querySelectorAll(".product")[0].addEventListener("click", function(){
    var name = document.querySelectorAll(".product")[0].getAttribute("name");
    document.getElementById("produto").innerHTML = name;
    document.getElementById("price-product").innerHTML = "R$ 159,90";
    document.getElementById("price-custom").innerHTML = "R$ 20,00";
    document.getElementById("price-shipping").innerHTML = "R$ 0";
    
    document.getElementById("popup-align-pedido").style.display = "flex";
    document.getElementById("popup-box").scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  });

  document.querySelectorAll(".product")[1].addEventListener("click", function(){
    var name = document.querySelectorAll(".product")[1].getAttribute("name");
    document.getElementById("produto").innerHTML = name;
    document.getElementById("price-product").innerHTML = "R$ 159,90";
    document.getElementById("price-custom").innerHTML = "R$ 20,00";
    document.getElementById("price-shipping").innerHTML = "R$ 0";
    
    document.getElementById("popup-align-pedido").style.display = "flex";
    document.getElementById("popup-box").scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  });

  document.querySelectorAll(".product")[2].addEventListener("click", function(){
    var name = document.querySelectorAll(".product")[2].getAttribute("name");
    document.getElementById("produto").innerHTML = name;
    document.getElementById("price-product").innerHTML = "R$ 199,90";
    document.getElementById("price-custom").innerHTML = "R$ 0";
    document.getElementById("price-shipping").innerHTML = "R$ 0";
    
    document.getElementById("popup-align-pedido").style.display = "flex";
    document.getElementById("popup-box").scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  });

  document.querySelectorAll(".product")[3].addEventListener("click", function(){
    var name = document.querySelectorAll(".product")[3].getAttribute("name");
    document.getElementById("produto").innerHTML = name;
    document.getElementById("price-product").innerHTML = "R$ 139,90";
    document.getElementById("price-custom").innerHTML = "R$ 20,00";
    document.getElementById("price-shipping").innerHTML = "R$ 0";
    
    document.getElementById("popup-align-pedido").style.display = "flex";
    document.getElementById("popup-box").scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  });

  document.getElementById("popup-close-pedido").addEventListener("click", function(){
    document.getElementById("popup-align-pedido").style.display = "none";
    document.body.style.overflow = "scroll";
  });

  document.getElementById("abrir-tabela").addEventListener("click", function(){
    document.getElementById("popup-align-pedido").style.display = "none";
    document.getElementById("popup-align").style.display = "flex";
  });

/*
  document.getElementById("iframe").addEventListener("click", function(){
  document.getElementById("notify").style.display = "none";
  });
*/

document.getElementById("req-pnome").addEventListener("change", function(){

var texto = document.getElementById("req-pnome").value;
document.getElementById("nome").innerHTML = document.getElementById("req-pnome").value;
document.getElementById("nome-lenght").innerHTML = texto.length + " / " + "10";

  });

document.getElementById("req-pnumero").addEventListener("change", function(){
var texto = document.getElementById("req-pnumero").value;
document.getElementById("numero").innerHTML = document.getElementById("req-pnumero").value;
document.getElementById("numero-lenght").innerHTML = texto.length + " / " + "2";
});

document.querySelector("#continuar").addEventListener("click", function(){

var produto = document.querySelector("#produto").innerText;
var tamanho = document.querySelector("#req-tamanho").value;
var pnome = document.querySelector("#req-pnome").value;
var pnumero = document.querySelector("#req-pnumero").value;
var cep = document.querySelector("#req-cep").value;
var rua = document.querySelector("#req-rua").value;
var numero = document.querySelector("#req-numero").value;
var bairro = document.querySelector("#req-bairro").value;
var cidade = document.querySelector("#req-cidade").value;
var uf = document.querySelector("#req-uf").value;
var priceProduct = document.getElementById("price-product").innerText;
var priceCustom = document.getElementById("price-custom").innerText;
var priceShipping = document.getElementById("price-shipping").innerText;

let date = new Date();
const d = date.toLocaleString('pt-BR')

var Fn = "%0A";
var Fnn = "%0A%0A";
var Fb = "*";
var Fhr = "---";

tamanho = "Tamanho " + tamanho;
produto = produto + " - " + tamanho;
pnome = "Nome: " + pnome.toUpperCase();
pnumero = "Número: " + pnumero;
rua = rua + ", " + numero;
cidade = cidade + "/" + uf;

var msg = Fb+"Solicitação%20de%20novo%20pedido%20✅"+Fb+Fnn+produto+Fn+priceProduct+Fnn+Fb+"Personalização"+Fb+Fn+priceCustom+Fnn+pnome+Fn+pnumero+Fnn+Fb+"Endereço para entrega"+Fb+Fn+priceShipping+Fnn+rua+Fn+bairro+Fn+cidade+Fn+cep+Fnn+Fhr+Fnn+d;
var site = "whatsapp://send/?phone=5555996421739&text=";
var format = site + msg;
window.open(format, "_blank");

document.getElementById("popup-align-pedido").style.display = "none";

});


// Play draw animation once

      
       var slideIndex = 0;
          carouselmsg();
          
          function carouselmsg() {
            var i;
            var x = document.getElementsByClassName("msg-header");
            for (i = 0; i < x.length; i++) {
              x[i].style.display = "none"; 
            }
            slideIndex++;
            if (slideIndex> x.length) {slideIndex = 1} 
            x[slideIndex-1].style.display = "block"; 
            setTimeout(carouselmsg, 3000); 
          }


var wrapper = document.querySelector('.wrapper svg');
      var btnDraw = document.querySelector('.btn-draw');
      var btnErase = document.querySelector('.btn-erase');
      
      // We are only adding and removing the 'active' class,
      // the entire animation is defined in the CSS code
      draw();

      function draw() {
        wrapper.classList.add('active');
        setTimeout(erase, 2500);
      }
      
      function erase() {
        wrapper.classList.remove('active');
        setTimeout(draw, 2600);
      }

var myIndex = 0;
carouselx();

function carouselx() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex> x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carouselx, 5000);    
}

document.querySelector("button[name='req']").addEventListener("click", function(){

  const x = document.querySelector("input[name='order']");
  var site = "https://www.melhorrastreio.com.br/meu-rastreio/"
  var format = site + x.value;

  if (x.value.length === 13 || x.value.length === 16) {
  window.open(format, '_blank');
  } else {
  x.value = "";
  x.placeholder = "Não encontrado!";  
  }

});

function limparCep() {

    document.getElementById('req-rua').value=("");
    document.getElementById('req-bairro').value=("");
    document.getElementById('req-cidade').value=("");
    document.getElementById('req-uf').value=("");

}

function callback(conteudo) {

    if (!("erro" in conteudo)) {
        document.getElementById('req-rua').value=(conteudo.logradouro);
        document.getElementById('req-bairro').value=(conteudo.bairro);
        document.getElementById('req-cidade').value=(conteudo.localidade);
        document.getElementById('req-uf').value=(conteudo.uf);
    }

    else {

        limparCep();

    }
}

document.getElementById("req-cep").addEventListener("blur", function(){

    var valor = document.getElementById("req-cep").value;
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {

    var formatarcep = /^[0-9]{8}$|^[\d]{2}.[\d]{3}-[\d]{3}/;
    
    if(formatarcep.test(cep)) {

        document.getElementById('req-rua').value="...";
        document.getElementById('req-bairro').value="...";
        document.getElementById('req-cidade').value="...";
        document.getElementById('req-uf').value="...";

        let result = cep.match(formatarcep);

        var script = document.createElement('script');
        script.src = 'https://viacep.com.br/ws/' + result + '/json/?callback=callback';
        document.body.appendChild(script);
        document.getElementById("req-cep").value = result;

        }
        else {

        limparCep();

        }
    }
    else {

        limparCep();

    }

});
