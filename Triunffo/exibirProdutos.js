/** exibirProdutos.js **/
/** usar "variável".toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) **/

/**  **/
/**  **/
/** Esse script deve ser inserido por ultimo na pagina **/
/**  **/
/**  **/

bannerAtivo = 0;
let el = new Elementos;
let itensNoCarrinho = new Array;
var divisorBanner, repetirTemporizador;

addItemAoCarrinho = function( identificaItem ){
    quantidadeDeItens = itensNoCarrinho.length;
    itensNoCarrinho[ quantidadeDeItens ] = identificaItem ;
    getById("quantidadeDeItensNoCarrinho").innerText = itensNoCarrinho.length
}

carregarBanner = function( divDoBanner ){
    cntBanner = 0;
    while( cntBanner < destaqueBanner.length ){
        imagemDeBanner = el.novaImagem( destaqueBanner[ cntBanner ].idItemEstoque.foto[0], destaqueBanner[ cntBanner ].textoApresentacao );
        divisorBanner = el.novaDiv( imagemDeBanner.outerHTML + el.novoParagrafo( el.novoSpan( destaqueBanner[ cntBanner ].textoApresentacao ).outerHTML + el.novoSpan( el.novoLink( destaqueBanner[ cntBanner ].idItemEstoque.tipo,"#" ).outerHTML ).outerHTML ).outerHTML );
        divisorBanner.style.backgroundImage = "linear-gradient(90deg, transparent, black), url(" + destaqueBanner[ cntBanner ].imgBanner + ")";
divisorBanner.id = "parte" + cntBanner;
        divisorBanner.setAttribute("class", "escondido" );
        el.acrescentar( divDoBanner, divisorBanner );
        cntBanner++
    }
    temporizadorBanner(  );
}

temporizadorBanner = function(){
repetirTemporizador = true;
setTimeout(function(){
if( repetirTemporizador == true ){
//console.log("A repetição está " + repetirTemporizador + ", Com o valor: " + bannerAtivo );
// COMANDOS PARA ALTERNAR O BANNER
    
    getById( "banner1" ).scrollTo( ( window.innerWidth * bannerAtivo),0 );
    
// FIM DA ALTERNAÇÃO NO BANNER
bannerAtivo++;
if( bannerAtivo == 3 ){ bannerAtivo = 0}
temporizadorBanner();
} else{ console.log("A repetição está " + repetirTemporizador ) } }, 3000 );
}

mostrarProdutos = function( divQueRecebeOsItens, produtos ){
numeradorProdutos = 0;
while ( numeradorProdutos < produtos.length ){
        fotoProd = el.novaImagem( produtos[numeradorProdutos].foto[0], produtos[numeradorProdutos].tipo + " " + produtos[numeradorProdutos].descricao );
       
        el.acrescentar( divQueRecebeOsItens, el.novaDiv( el.novoLink( fotoProd.outerHTML + produtos[numeradorProdutos].tipo + " " + produtos[numeradorProdutos].descricao ,"#").outerHTML ) );
        numeradorProdutos++
    }
}
