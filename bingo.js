/*******************************************************************
  Entrada de dados
********************************************************************/
// Entrada (Para fácil compreensão não foram utilizadas estruturas de dados mais complexas ainda que eu reconheça os benefícios elas agregariam à entrada de dados)
var qtdParticipantes = 3;
var donosDasCartelas = ["Malaquias", "Michelen", "Juliate"]
var cartelas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//var cartelas = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]; // Útil para testar casos de mútilplos vencedores

/*******************************************************************
  Variáveis e Constantes de controle
********************************************************************/

var universoNumeros = 100; // numeros de 1~99
//var universoNumeros = 10; // numeros de 1~9
var numerosChamados = [];

/*******************************************************************
  Funções auxiliares
********************************************************************/

function sortearNovoNumero() {
    var novoNumero;
    while( numerosChamados.indexOf( novoNumero ) != -1 ){
        novoNumero = Math.floor(Math.random() * (universoNumeros - 1) + 1);
    }
    return novoNumero;
}
function contabilizarNumeroNasCartelas(numero) {
    var cartela;
    var indiceNumeroNaCartela;
    for (let i = 0; i < qtdParticipantes; i++) {
        cartela = cartelas[i];
        indiceNumeroNaCartela = cartela.indexOf( numero );
        if( indiceNumeroNaCartela >= 0 ){
            cartela.splice(indiceNumeroNaCartela, 1 /* remove 1 item */)
        }        
    }
}
function verificarSeAlgumaCartelaBateu(){
    var cartela;    
    for (let i = 0; i < qtdParticipantes; i++) {
        cartela = cartelas[i];        
        if( !cartela.length ){
            return true;
        }
    }
    return false;
}
function apresentarVencedores(){
    var vencedores = [];
    for (let i = 0; i < qtdParticipantes; i++) {
        if( ! (cartelas[i]).length ){
            vencedores.push( donosDasCartelas[i] );
        }
    }

    console.log(vencedores.join(','));
}

/*******************************************************************
  Função principal
********************************************************************/

function bingo(){
    var numeroSorteado;
    while ( ! verificarSeAlgumaCartelaBateu() ) {
        numerosChamados.push( numeroSorteado = sortearNovoNumero() );
        contabilizarNumeroNasCartelas( numeroSorteado );
    }
    apresentarVencedores();

    console.log( "Quantidade de números chamados: " + numerosChamados.length );
    console.log( "Números chamados: " + numerosChamados.join(',') );
}

/*******************************************************************
  Script
********************************************************************/

bingo();