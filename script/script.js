const day = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
const date = new Date();
const fullDate = date.getDay();
var diaria = '';
var listEntregas = document.getElementById('listEntregas');
var entrega = document.getElementById('entrega');
var entregas = 0;
var total = 0;
var motoca = document.getElementById('motoca');
document.getElementById('dia').innerHTML = day[fullDate];

function testefoto() {
    switch (motoca.value) {
        case 'Patrick':
            document.getElementById('foto').src='imagens/patrick.jpg'
            break;
        case 'Leonardo':
            document.getElementById('foto').src='imagens/leo.png'
            break;
        case 'Panco':
            document.getElementById('foto').src='imagens/panco.png'
            break;
    
        default:
            document.getElementById('foto').src='download-removebg-preview.png'
            break;
    }
}

switch (fullDate) {
    case 0:
        diaria = 60;
        break;

    case 1:
        diaria = 'Pizzaria fechada';
        break;

    case 2:
        diaria = 55;
        break;

    case 3:
        diaria = 55;
        break;

    case 4:
        diaria = 55;
        break;

    case 5:
        diaria = 60;
        break;

    case 6:
        diaria = 60;
        break;

    default:
        break;
}

document.getElementById('diaria').innerHTML = `Diária: &nbspR$${diaria},00`;
document.getElementById('totalEntregas').innerHTML= `Total da noite R$${diaria},00`



function adicionar() {
    
    listEntregas.innerHTML += `<div> ${entrega.value}</div>`
    entrega.value = '';
    entregas++;
    total = entregas * 2 + diaria;
    document.getElementById('numEntregas').innerHTML=`Número de entregas feitas: ${entregas} - Valor R$${entregas*2},00`
    document.getElementById('totalEntregas').innerHTML= `Total da noite R$${total},00`
}
