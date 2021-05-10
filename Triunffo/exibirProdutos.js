/** exibirProdutos.js **/
/** usar "variável".toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) **/

/******************************************************************/
/******************************************************************/
/******* Esse script deve ser inserido por ultimo na pagina *******/
/******************************************************************/
/******************************************************************/


//bannerAtivo = 0;
repetirTemporizador = true;
let el = new Elementos;
let itensNoCarrinho = new Array;
var divisorBanner, repetirTemporizador, bannerAtivo, nomeDoConteiner;

let nSVG = new ElementosSVG;
setaBolhaD = nSVG.novoSVG( "" );
setaBolhaE = nSVG.novoSVG( "" );
setaBolhaD.innerHTML = nSVG.novoCirculo( 20, 20, 15 , "", "stroke:white; stroke-width: 3px") + nSVG.novaPolyforma("setaD", "17,12 23,19 17,27 23,19", "stroke-width: 5px; stroke:white;");
setaBolhaE.innerHTML = nSVG.novoCirculo( 20, 20, 15 , "", "stroke:white; stroke-width: 3px") + nSVG.novaPolyforma("setaE", "23,12 17,19 23,27 17,19", "stroke-width: 5px; stroke:white;");
//destaqueBanner[ cntBanner ].idItemEstoque.cores[0]
botaoSetaCricular = ( corDoBotao, desenhoDaSeta ) => {
	itemDeSeta = nSVG.novoSVG("");
	itemDeSeta.innerHTML = nSVG.novoCirculo( 20, 16, 15 , "", "stroke: " + corDoBotao ) + nSVG.novaPolyforma("seta", desenhoDaSeta, "stroke-width: 5px; stroke: " + corDoBotao );
	return itemDeSeta;
}

alternarBotaoBaner = ( numeroDoBanner ) => {
    if ( numeroDoBanner == 0 ) return [2,1];
    if ( numeroDoBanner == 1 ) return [0,2];
    if ( numeroDoBanner == 2 ) return [1,0];
}

carregarBanner = ( divDoBanner ) => {
    nomeDoConteiner = divDoBanner;
    cntBanner = 0;
    while( cntBanner < destaqueBanner.length ){
        textoDoBanner = el.novaDiv( el.novoLink( botaoSetaCricular( destaqueBanner[ cntBanner ].idItemEstoque.cores[0], "23,8 17,15 23,23 17,15" ).outerHTML, "javascript:escolherBanner( " + alternarBotaoBaner(cntBanner)[0] + " )" ).outerHTML + el.novoParagrafo( destaqueBanner[ cntBanner ].textoApresentacao ).outerHTML +  el.novoLink( botaoSetaCricular( destaqueBanner[ cntBanner ].idItemEstoque.cores[0], "17,8 23,15 17,23 23,15" ).outerHTML, "javascript:escolherBanner( " + alternarBotaoBaner(cntBanner)[1] + " )"  ).outerHTML );
        textoDoBanner.style.color = destaqueBanner[ cntBanner ].idItemEstoque.cores[0];
        btCatalogo = el.novoLink( /*destaqueBanner[ cntBanner ].idItemEstoque.tipo*/ "VER MAIS", "catalogo/" + destaqueBanner[ cntBanner ].idItemEstoque.tipo.toLocaleLowerCase() );
        btCatalogo.style.backgroundColor = destaqueBanner[ cntBanner ].idItemEstoque.cores[0];
        btCatalogo.style.color = destaqueBanner[ cntBanner ].idItemEstoque.cores[1];
        divisorBanner = el.novaDiv( textoDoBanner.outerHTML + btCatalogo.outerHTML );
        divisorBanner.style.backgroundImage = "url(" + destaqueBanner[ cntBanner ].imgBanner + ")";
        divisorBanner.id = "parte" + cntBanner;
        divisorBanner.setAttribute("class", "escondido" );
        el.acrescentar( nomeDoConteiner, divisorBanner );
        cntBanner++
    }
    temporizadorBanner( 0, nomeDoConteiner );
}

numeradorDeTransicao = ( numeroInicial, numeroFinal, saltosDeContagem ) => {
    a=numeroInicial;
    b=numeroFinal;
    c=saltosDeContagem;
    while( a<=b){
        setTimeout(function(){ getById( "banner1" ).scrollTo( a,0 ) }, 100 );
        
        //console.log(a)
        a=a+c;
    }
}

escolherBanner = ( bannerEscolhido ) => {
    repetirTemporizador = false;
	getById( nomeDoConteiner ).children[ alternarBotaoBaner( bannerEscolhido )[0] ].style.transform = "translate( var(--larguraTotalInverso),0px) rotateY(90deg)";
	getById( nomeDoConteiner ).children[ bannerEscolhido ].style.transform = "translate(0px,0px) rotateY(0deg)";
	getById( nomeDoConteiner ).children[ alternarBotaoBaner( bannerEscolhido )[1] ].style.transform = "translate( var(--larguraTotal),0px) rotateY(90deg)";
    temporizadorBanner( bannerEscolhido );
}

temporizadorBanner = ( bannerRecebido, idDoConteiner ) => {
    bannerAtivo = bannerRecebido;

	if( repetirTemporizador == true ){
		setTimeout( function(){

			//getById( "banner1" ).scrollTo( ( window.innerWidth * bannerAtivo),0 );
			getById( idDoConteiner ).children[ alternarBotaoBaner( bannerAtivo )[0] ].style.transform = "translate( var(--larguraTotalInverso),0px) rotateY(90deg)";
			getById( idDoConteiner ).children[ bannerAtivo ].style.transform = "translate(0px,0px) rotateY(0deg)";
			getById( idDoConteiner ).children[ alternarBotaoBaner( bannerAtivo )[1] ].style.transform = "translate( var(--larguraTotal),0px) rotateY(90deg)";

			// FIM DA ALTERNAÇÃO NO BANNER
			bannerAtivo++;
			if( bannerAtivo == 3 ){ bannerAtivo = 0; temporizadorBanner( bannerAtivo, idDoConteiner ) } else { temporizadorBanner( bannerAtivo, idDoConteiner ) }
		}, 5000 );
	} else{ console.log("A repetição está " + repetirTemporizador + ", agora será reativada." ); repetirTemporizador = true } 
    
}

mostrarProdutos = ( divQueRecebeOsItens, produtos ) => {
	numeradorProdutos = 0;
	while ( numeradorProdutos < produtos.length ){
        fotoProd = el.novaImagem( produtos[numeradorProdutos].foto[0], produtos[numeradorProdutos].tipo + " " + produtos[numeradorProdutos].descricao );
       
        el.acrescentar( divQueRecebeOsItens, el.novoLink( fotoProd.outerHTML + el.novoSpan( produtos[numeradorProdutos].tipo ).outerHTML ,"catalogo/index.html") );
        numeradorProdutos++
    }
}
