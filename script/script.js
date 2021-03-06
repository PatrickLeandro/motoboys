const day = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
const date = new Date();
const fullDate = date.getDay();
var diaria = 0;
var listEntregas = document.getElementById('listEntregas');
var entrega = document.getElementById('entrega');
var taxa = document.getElementById('taxa');
var entregas = 0;
var total = 0;
var motoca = document.getElementById('motoca');
document.getElementById('dia').innerHTML = day[fullDate];
var contador = 0;
var alterarDiaria = 0;
var taxaInteira = 0;
var qtdInteiras = 0;
var valorInteiras = 0;

function trocafoto() {
    contador++;
    switch (contador) {
        case 1:
            document.getElementById('foto').src='imagens/patrick.jpg'
            break;
        case 2:
            document.getElementById('foto').src='imagens/leo.png'
            break;
        case 3:
            document.getElementById('foto').src='imagens/panco.png'
            break;
    
        default:
            document.getElementById('foto').src='imagens/download-removebg-preview.png'
            contador = 0;
            break;
    
    }
}

function mudarDiaria() {
    alterarDiaria++;
    switch (alterarDiaria) {
        case 1:
            diaria = 35;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`        
            break;
        case 2:
            diaria = 40;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
        break
        case 3:
            diaria = 45;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
        break
        case 4:
            diaria = 50;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
        break
        case 5:
            diaria = 55;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
        break
        case 6:
            diaria = 60;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
        break
        case 7:
            diaria = 65;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
        break
        default:
            diaria = 70;
            alterarDiaria = 0;
            total = entregas * 3 + diaria + valorInteiras;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
            break;
    } 
}

function diariaMotoca() {
    
    switch (fullDate) {
        case 0:
            diaria = 60;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`
            break;
    
        case 1:
            diaria = 40;           
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`
            break;
    
        case 2:
            diaria = 55;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`
            break;
    
        case 3:
            diaria = 55;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`           
            break;
    
        case 4:
            diaria = 55;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`
            break;
    
        case 5:
            diaria = 60;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`          
            break;
    
        case 6:
            diaria = 60;
            document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
            document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`            
            break;
    
        default:
            break;
    }
}

function adicionar() {
    listEntregas.innerHTML += `<div> ${entrega.value}</div>`
    entrega.value = '';
    entregas++;
    total = entregas * 3 + diaria + valorInteiras;
    document.getElementById('numEntregas').innerHTML=`Entregas comuns ${entregas} - Valor R$${entregas*3},00 <br>
    Entregas inteiras: ${qtdInteiras} - Valor R$${valorInteiras}`
    document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
}



function addTaxaInteira() {
    qtdInteiras++;
    var select = document.getElementById('taxasInteiras');
    taxaInteira = select.options[select.selectedIndex].value;
    valorInteiras = valorInteiras + Number(taxaInteira);
    
    let mostradorDaTaxa = Number(taxaInteira);
    listEntregas.innerHTML += `<div class="taxaInteira">${taxa.value}  - R$${mostradorDaTaxa}</div>`
    
    total = entregas * 3 + diaria + valorInteiras;
    document.getElementById('numEntregas').innerHTML=`Entregas comuns ${entregas} - Valor R$${entregas*3},00 <br>
    Entregas inteiras: ${qtdInteiras} - Valor R$${valorInteiras}`
    document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
    taxa.value = '';    

    
    
}
