/** exibirProdutos.js **/
/** usar "variável".toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) **/

/**  **/
/**  **/
/** Esse script deve ser inserido por ultimo na pagina **/
/**  **/
/**  **/

//bannerAtivo = 0;
    repetirTemporizador = true;
let el = new Elementos;
let itensNoCarrinho = new Array;
var divisorBanner, repetirTemporizador, bannerAtivo;

alternarBotaoBaner = function( numeroDoBanner ){
    if (numeroDoBanner == 0 ) return [2,1];
    if ( numeroDoBanner == 1 ) return [0,2];
    if ( numeroDoBanner == 2 ) return [1,0];
}

carregarBanner = function( divDoBanner ){
    cntBanner = 0;
    while( cntBanner < destaqueBanner.length ){
        textoDoBanner = el.novaDiv( el.novoLink("<", "javascript:escolherBanner( " + alternarBotaoBaner(cntBanner)[0] + " )" ).outerHTML + el.novoParagrafo( destaqueBanner[ cntBanner ].textoApresentacao ).outerHTML +  el.novoLink(">", "javascript:escolherBanner( " + alternarBotaoBaner(cntBanner)[1] + " )"  ).outerHTML );
        textoDoBanner.style.color = destaqueBanner[ cntBanner ].idItemEstoque.cores[0];
        btCatalogo = el.novoLink( "VER A LINHA " + destaqueBanner[ cntBanner ].idItemEstoque.tipo,"catalogo/index.html" );
        btCatalogo.style.backgroundColor = destaqueBanner[ cntBanner ].idItemEstoque.cores[0];
        btCatalogo.style.color = destaqueBanner[ cntBanner ].idItemEstoque.cores[1];
        divisorBanner = el.novaDiv( textoDoBanner.outerHTML + btCatalogo.outerHTML );
        divisorBanner.style.backgroundImage = "url(" + destaqueBanner[ cntBanner ].imgBanner + ")";
        divisorBanner.id = "parte" + cntBanner;
        divisorBanner.setAttribute("class", "escondido" );
        el.acrescentar( divDoBanner, divisorBanner );
        cntBanner++
    }
    temporizadorBanner( 0 );
}

numeradorDeTransicao = function( numeroInicial, numeroFinal, saltosDeContagem ){
    a=numeroInicial;
    b=numeroFinal;
    c=saltosDeContagem;
    while( a<=b){
        setTimeout(function(){ getById( "banner1" ).scrollTo( a,0 ) }, 100 );
        
        //console.log(a)
        a=a+c;
    }
}

escolherBanner = function( bannerEscolhido ){
    repetirTemporizador = false;
    getById( "banner1" ).scrollTo( ( window.innerWidth * bannerEscolhido),0 );
    temporizadorBanner( bannerEscolhido );
}

temporizadorBanner = function( bannerRecebido ){
    bannerAtivo = bannerRecebido;
    //getById( "banner1" ).scrollTo( ( window.innerWidth * bannerAtivo),0 );
    
        if( repetirTemporizador == true ){ setTimeout(function(){
            //console.log("A repetição está " + repetirTemporizador + ", Com o valor: " + bannerAtivo );
            // COMANDOS PARA ALTERNAR O BANNER

            
            getById( "banner1" ).scrollTo( ( window.innerWidth * bannerAtivo),0 );

            // FIM DA ALTERNAÇÃO NO BANNER
            bannerAtivo++;
            if( bannerAtivo == 3 ){ bannerAtivo = 0; temporizadorBanner( bannerAtivo ) } else { temporizadorBanner( bannerAtivo ) }
    }, 5000 );    } else{ console.log("A repetição está " + repetirTemporizador + ", agora será reativada." ); repetirTemporizador = true } 
    
}

mostrarProdutos = function( divQueRecebeOsItens, produtos ){
numeradorProdutos = 0;
while ( numeradorProdutos < produtos.length ){
        fotoProd = el.novaImagem( produtos[numeradorProdutos].foto[1], produtos[numeradorProdutos].tipo + " " + produtos[numeradorProdutos].descricao );
       
        el.acrescentar( divQueRecebeOsItens, el.novoLink( fotoProd.outerHTML + el.novoSpan( produtos[numeradorProdutos].tipo ).outerHTML ,"catalogo/index.html") );
        numeradorProdutos++
    }
}
