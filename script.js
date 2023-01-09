let pratoAnterior;
let BebidaAnterior;
let SobremesaAnterior;

let prato;
let bebida;
let sobremesa;

let precoPrato = 10; 
let precoBebida = 10; ;
let precoSobremesa = 10; ;
let valorTotal;

let nomeDoPrato;
let nomeDaBebida;
let nomeDaSobremesa;

function selecionaroPrato(pratoSelecionado){
    pratoAnterior = document.querySelector('.prato .selecionado');

    if(pratoAnterior !== null){
        pratoAnterior.classList.remove('selecionado');
    }

    pratoSelecionado.classList.add('selecionado');
    prato = pratoSelecionado.innerHTML;
    comprar();
}

function selecionaroBebida(BebidaSelecionado){
    BebidaAnterior = document.querySelector('.bebida .selecionado');

    if(BebidaAnterior !== null){
        BebidaAnterior.classList.remove('selecionado');
    }

    BebidaSelecionado.classList.add('selecionado');
    bebida = BebidaSelecionado.innerHTML;
    comprar();
}

function selecionaroSobremesa(SobremesaSelecionado){
    SobremesaAnterior = document.querySelector('.sobremesa .selecionado');

    if(SobremesaAnterior !== null){
        SobremesaAnterior.classList.remove('selecionado');
    }

    SobremesaSelecionado.classList.add('selecionado');
    sobremesa = SobremesaSelecionado.innerHTML;
    comprar();
}
comprar();
function comprar(){
    if(prato !== undefined){
        if(bebida !== undefined){
            if(sobremesa !== undefined){
                const finalizarpedido = document.querySelector('.internoBaixo');
                finalizarpedido.innerHTML = 'Fechar pedido';
                finalizarpedido.classList.add('fechar-pedido');
                document.getElementById("disable").disable = true;
            }
        }
    }
}

//desistim não deu tempo

valorTotal = (precoPrato+precoBebida+precoSobremesa);

let mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${nomeDoPrato}
- Bebida: ${nomeDaBebida}
- Sobremesa: ${nomeDaSobremesa}
Total: R$ ${valorTotal}`;

const msgzap = encodeURIComponent(mensagem);
window.open(`http://wa.me/5518997597746?text=${msgzap}`)


