let botao = document.querySelector("#calcular");
let sidao = document.querySelector("#easteregg");
const constante = 5.67 * Math.pow(10,-8);

function calculaAreaEsfera(raio){
    let area = 4*Math.PI * Math.pow(raio,2);
    return area;
}

function calcular(area_esfera, emissividade, temperaturaA,temperaturaB) {
    let resultado = area_esfera*emissividade*constante*(Math.pow(temperaturaA,4) - Math.pow(temperaturaB,4));
    return resultado;
}
function atualizarResultado(){
    let raioEl = document.querySelector("#raio");
    let emissividadeEl = document.querySelector("#emi");
    let temperaturaAEl = document.querySelector("#ta");
    let temperaturaBEl = document.querySelector("#tb");

    let raio = raioEl.value;
    let emisividade = emissividadeEl.value;
    let tempA = temperaturaAEl.value;
    let tempB = temperaturaBEl.value;

    let area_esfera = calculaAreaEsfera(raio);
    
    let resultado = calcular(area_esfera,emisividade,tempA,tempB);
    
    let areaResultado = document.querySelector("#areaResultado");
    areaResultado.innerHTML = `A potencia é ${resultado}W`;
}

botao.addEventListener('click', atualizarResultado);
