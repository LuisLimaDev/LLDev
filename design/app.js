// app.js


elmnts = new Elementos;
forms = new FormLL;
posItens = "block";
editSaida = "true";
larguraTotal = window.innerWidth || screen.availWidth;
alturaTotal = window.innerHeight || screen.availHeight;
getById("entrada").style.width = "100%";
getById("entrada").style.height = ( Math.round(alturaTotal*0.40) ) + "px";
getById("saida").style.width = "100%";
getById("saida").style.height = ( Math.round(alturaTotal*0.48) ) + "px";


calcTela = window.innerHeight - getById("menuConteudo").offsetHeight;
getById("itensPrincipais").style.height= calcTela + "px";
anteriores = [];

editavel=()=>{
	editSaida = getById("saida").getAttribute("contenteditable");
	if( editSaida === "true" ){
		editSaida = false
	} else { editSaida = true }
	getById("saida").setAttribute("contenteditable", editSaida );
}

ajustTamanhos=()=>{
	larguraTotal = window.innerWidth || screen.availWidth;
	alturaTotal = window.innerHeight || screen.availHeight;
	if( posItens === "block"){
		getById("itensPrincipais").style.display = "block";
		getById("entrada").style.width = "100%";
		getById("entrada").style.height = ( Math.round( calcTela/2 )-15 ) + "px";
		getById("saida").style.width = "100%";
		getById("saida").style.height = ( Math.round( calcTela/2 )-15 ) + "px";
		posItens = "flex";
	} else {
		posItens = "block";
		getById("itensPrincipais").style.display = "flex";
		getById("itensPrincipais").style.width = "100%";
		getById("entrada").style.width = ( Math.round( larguraTotal * 0.4999) ) + "px";
		getById("entrada").style.height = ( calcTela-22 ) + "px";
		getById("saida").style.width = ( Math.round( larguraTotal * 0.4999) ) + "px";
		getById("saida").style.height = ( calcTela ) + "px";
	}
}

function salvarArquivo(){
	textoConteudo = getById("entrada").value;
	nomeDoArquivo = getById("nomeDoArquivo").value;
	download( nomeDoArquivo, textoConteudo );
}

const gerarNumeros = ( numeroInicial, numeroFinal, pularNumeros, localSaida ) => {
	if ( pularNumeros == null ){ pularNumeros = 2 }
	while ( numeroInicial <= numeroFinal ){
		paragrafo =  elmnts.novoParagrafo( numeroInicial );
		paragrafo.setAttribute("class", "gerarNumeros");
		elmnts.acrescentar( localSaida, paragrafo );
		numeroInicial = numeroInicial + pularNumeros;
	}
}

const gerarTabela = ( numeroInicial, numeroFinal, qtdColunas, localSaida ) => {
	tabela = criar({ nomeDoElemento: "table"});
	while( numeroInicial < numeroFinal ){
		linhaT = criar({ nomeDoElemento: "tr"});
		colunas=1;
		while( colunas < (qtdColunas+1) ){
			celula = criar({ nomeDoElemento: "td" });
			celula.innerText = numeroInicial;
			linhaT.append( celula );
			colunas++;
		numeroInicial++
		}
		tabela.append( linhaT )
	}
	localSaida.append( tabela )
}

function testeCores(){
	nada = 0; total = 255;
	while (nada <= total){
		codigoDaCor = "rgb(0,"+nada+",125)";
		mostragem = novoElm("div");
		mostragem.style.background = codigoDaCor ;
		getById("saida").append( mostragem );
		mostragem.innerText = codigoDaCor;
		nada = nada + 01;
	}
}

function playM( urlMusica, tipoDeAudio, elementoDeSaida ){
	tagAudio = novoElm("audio");
	tagAudio.setAttribute("controls", "");
	elmnts.acrescentar( tagAudio, tagSource( urlMusica, "audio/" + tipoDeAudio ) );
	getById( elementoDeSaida ).append( tagAudio );
}

function playV( urlVideo, tipoDeVideo, elementoDeSaida ){
	tagVideo = novoElm("video");
	tagVideo.setAttribute("controls", "");
	tagVideo.append( tagSource( urlVideo, "video/" + tipoDeVideo ) );
	getById( elementoDeSaida ).append( tagVideo );
}

function tagSource( urlDoItem, tipoDoItem ){
	origemDoItem = novoElm("source");
	origemDoItem.src = urlDoItem;
	origemDoItem.setAttribute( "type", tipoDoItem );
	return origemDoItem;
}

function testeRGB( vermelho, verde, azul){
	nada = 0; total = 255;
	while (nada <= total){
		codigoDaCor = "rgb(0,"+nada+",125)";
		mostragem = novoElm("div");
		mostragem.style.background = codigoDaCor ;
		getById("saida").append(mostragem);
		mostragem.innerText = codigoDaCor;
		nada = nada + 01;
	}
}

function addLinkNoPost( textoDeLink ){
	//getById("entrada").value = getById("entrada").value + elmnts.novoLink( textoDeLink, getById( "campo1" ).value , getById("campo2").value ).outerHTML;
	
	//tamanhoDoTexto = textoDeLink.length;
	//getById("entrada").value.match( window.document.getSelection().toLocaleString() );
	console.log(getById("entrada").value.replace( window.document.getSelection().toLocaleString(), elmnts.novoLink( textoDeLink, getById( "campo1" ).value , getById("campo2").value ).outerHTML ));
	getById("entrada").value = getById("entrada").value.replace( window.document.getSelection().toLocaleString(), " " + elmnts.novoLink( textoDeLink, getById( "campo1" ).value , getById("campo2").value ).outerHTML + " " );
	getById("campo1").value = "";
	getById("campo2").value = "";
	gerarHTML();
}

function gerarHTML(){
	getById("saida").innerHTML = getById("entrada").value;
}

function addLink(){
	selecao = window.document.getSelection();
	textoDoLink = window.document.getSelection().toLocaleString();
	if( textoDoLink != "" && textoDoLink != null && window.document.getSelection().anchorNode.id === "ferramentas" ){
		//getById("campo1").class.remove( "escondido" );
		//getById("campo2").class.remove( "escondido" );
		getById("atributos").style.animation = "1s focoDeLeitura linear normal";
		getById("campo1").placeholder = "endereço Do Link";
		getById("campo2").placeholder = "abrir em nova guia?";
		getById("adicionarItem").addEventListener( "click", function(){addLinkNoPost( textoDoLink ) });
	}
}

function abrirJanela( janelaParaAbrir ){ janelaParaAbrir.style.display = "block"; setTimeout( function(){ janelaParaAbrir.style.opacity = "1" }, 500) }
function fecharJanela( janelaParaFechar ){ janelaParaFechar.style.opacity = "0" ; setTimeout( function(){ janelaParaFechar.style.display = "none" }, 500) }

function novoElementoAleatorio( nomeElemento, attr1, valor1, attr2, valor2, valorInterno){
	novoElemento = document.createElement( nomeElemento );
	novoElemento.setAttribute( attr1, valor1 );
	novoElemento.setAttribute( attr2, valor2 );
	if( valorInterno != "" && valorInterno != null ){
		novoElemento.innerHTML = valorInterno;
	}
	return novoElemento;
}

function elementoPai( elementofilho ){
	itemSelecionadoEdicao = elementofilho.parentElement;
	listarAttrs( itemSelecionadoEdicao );
}

function aplicarPropriedade( propNome, valorProp ){
	itemSelecionadoEdicao.setAttribute(propNome, valorProp);
	gerarTexto();
}

isolarOuterHTML=( stringID )=>{
	if( stringID != "" && stringID != undefined && stringID != null ){
		if( !( getById( stringID) ) != true ){
			elmIsolado = elmnts.novaDiv( "<h1>getById('" + stringID + "').outerHTML</h1>" );
			elmIsolado.innerText = getById( stringID).outerHTML
			getById("divArvore").append( elmIsolado );
		}
	}
}

editContElm=()=>{
	itemSelecionadoEdicao.innerHTML = getById('conteudoElementoSelec').innerText;
}

function listarAttrs( elSelecionado ){
	itemSelecionadoEdicao = elSelecionado;
	nomeElemento = forms.inputTexto( "nomeElemento", "nomeElemento",'');
	nomeElemento.placeholder = "nome do elemento";
	nomeAttr1 = forms.inputTexto( "nomeAttr1", "nomeAttr1",'class');
	nomeAttr1.placeholder = "primeiro atributo";
	valAttr1 = forms.inputTexto( "valAttr1", "valAttr1",'');
	valAttr1.placeholder = "valor do primeiro atributo";
	nomeAttr2 = forms.inputTexto( "nomeAttr2", "nomeAttr2",'style');
	nomeAttr2.placeholder = "segundo atributo";
	valAttr2 = forms.inputTexto( "valAttr2", "valAttr2",'');
	valAttr2.placeholder = "valor do segundo atributo";
	valInternoElm = forms.inputTexto( "valInternoElm", "valInternoElm",'');
	valInternoElm.placeholder = "conteudo do elemento";

	quantidadeDeAttrs = elSelecionado.attributes.length;
	btflutanteFechar = elmnts.novoLink("Propriedades -", "javascript:fecharJanela( getById('propriedades') )");
	btflutanteFechar.setAttribute( "class", "btflutante" );
	topoProps = elmnts.novaDiv( btflutanteFechar.outerHTML ) ;
	topoProps.style.position = "fixed";
	topoProps.id = "topoProps";
	listaClasses = elSelecionado.getAttribute("class");
	getById("propriedades").innerHTML = elmnts.novoButton("Ajustar",'ajustTamanhos()',"").outerHTML +"<hr>"+ btflutanteFechar.outerHTML + "<h3>Objeto: " + elSelecionado.tagName + "</h3><h3>ID: " + elSelecionado.id + "</h3><h4>Class: " + listaClasses + "</h4>";

	//itensFilhos = elmnts.novaDiv(elmnts.novoButton('Acima', "elementoPai( itemSelecionadoEdicao )" ,'').outerHTML + "<h3>Árvore</h3>");
	itensFilhos = elmnts.novaDiv(elmnts.novoLink('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="20"><polygon points="0,10, 10,0, 0,10, 20,10, 0,10, 10,20" style="stroke:black"></polygon><text style="transform: translate(30px, 19px); font-size: 18pt;">Acima</text></svg>', "javascript:elementoPai( itemSelecionadoEdicao )" ,'').outerHTML + "<h3>Árvore</h3>");
	itensFilhos.setAttribute("class", "itensFilhos");
	itensFilhos.id = "divArvore";
	getById("propriedades").append( itensFilhos );
	if( itemSelecionadoEdicao.children.length > 0){
		elFilhos=0;
		while( elFilhos < itemSelecionadoEdicao.children.length ){
			itensFilhos.append( elmnts.novoLink( ( elFilhos + 1) + ". " + itemSelecionadoEdicao.children[elFilhos].nodeName + ": " + itemSelecionadoEdicao.children[elFilhos].innerHTML.slice(0,20) , "javascript:listarAttrs( itemSelecionadoEdicao.children[" + elFilhos + "] )", "") );
			elFilhos++;
		}
	}
	itensFilhos.append( elmnts.novaDiv( "Isolar HTML " + elmnts.novoButton("outerHTML", "isolarOuterHTML('" + elSelecionado.id + "')" ).outerHTML ) );
	conteudoDoElemento = criar({ nomeDoElemento:"div", atributoID:"conteudoElementoSelec" });
	conteudoDoElemento.innerText = elSelecionado.innerHTML;
	conteudoDoElemento.setAttribute("contenteditable", "true");
	itensFilhos.append( elmnts.novaDiv( "Conteúdo do elemento " + conteudoDoElemento.outerHTML + elmnts.novoButton("Aplicar", "editContElm(itemSelecionadoEdicao)" ).outerHTML ) );

	if( itemSelecionadoEdicao.nodeName == "STYLE" || itemSelecionadoEdicao.nodeName == "SCRIPT"){
		//getById("conteudoElementoSelec").append(elmnts.novaDiv( itemSelecionadoEdicao.innerHTML.replaceAll(";", "; <br>") ));
		//blocoDeElemento = elmnts.novaDiv( itemSelecionadoEdicao.innerHTML.replaceAll(";", "; <br>") );
		//getById("propriedades").append( elmnts.novaDiv( "<h3>" + itemSelecionadoEdicao.nodeName + "</h3>" + blocoDeElemento.outerHTML ) )
		//console.log( itemSelecionadoEdicao.nodeName );
	}

	btNovoElemento = elmnts.novaDiv("Adicionar um novo Elemento: ");
	getById("propriedades").append( btNovoElemento );
	btNovoElemento.append( nomeElemento, nomeAttr1, valAttr1, nomeAttr2, valAttr2, valInternoElm );
	btNovoElemento.append( elmnts.novoButton("Add", 'itemSelecionadoEdicao.append( novoElementoAleatorio( getById( "nomeElemento" ).value, getById( "nomeAttr1" ).value, getById( "valAttr1" ).value, getById( "nomeAttr2" ).value, getById( "valAttr2" ).value, getById( "valInternoElm" ).value ) )', '' ) );

	contAttrs = 0;
	while(contAttrs < quantidadeDeAttrs ){
		attrNome = elSelecionado.attributes[ contAttrs ].name;
		if( attrNome == "style"){
			conteudoAtributo = elSelecionado.attributes[ contAttrs ].textContent.replaceAll(";", "; <br>");
			//conteudoAtributo = itemSelecionadoEdicao.style.cssText.replaceAll(";", "; <br>");
		} else {
			conteudoAtributo = elSelecionado.attributes[ contAttrs ].textContent;
		}
		//console.log( conteudoAtributo );
		
		editarAttrs = elmnts.novaDiv( conteudoAtributo );
		editarAttrs.id = "editarAttr--" + attrNome;
		editarAttrs.setAttribute("contenteditable", "true");
		getById("propriedades").append( elmnts.novaDiv( "<h5>" + elSelecionado.attributes[ contAttrs ].name + "</h5>" + editarAttrs.outerHTML + elmnts.novoButton("Aplicar " + attrNome, 'aplicarPropriedade( "' + attrNome + '", getById("editarAttr--' + attrNome + '").innerText )', "").outerHTML ) );
		contAttrs++;
	}
	novoAttrNome = elmnts.novaDiv("add_atributo");
	novoAttrNome.setAttribute("contenteditable", "true");
	novoAttrValor = elmnts.novaDiv("valores");
	novoAttrValor.setAttribute("contenteditable", "true");
	btAplicaNovoAttr = elmnts.novoButton("Adicionar", "itemSelecionadoEdicao.setAttribute( novoAttrNome.innerText, novoAttrValor.innerText )", "");
	getById("propriedades").append( novoAttrNome, novoAttrValor, btAplicaNovoAttr );
	estilosItemSelecionado( itemSelecionadoEdicao );
	getById("propriedades").append( criar({ nomeDoElemento:"section", atributoStyle:"width: 80px; padding: 90px 25px;", conteudoInterno:"<a class='btflutante' style='right: 190px' target='_blank' href='https://luislimadev.github.io/LLDev'>github@LLDev</a>" }) );
}

itensEstilizados = new Array();
estilosN = new Array();
coletarEstilos=()=>{
	estilos = document.styleSheets;
	regrasDeEstilo = new Array();
	if( estilos.length > 0 ){
		for( styles = 0; styles < estilos.length; styles++ ){
			regrasDeEstilo.push( estilos[ styles ].rules );
			for( lEstilo = 0; lEstilo < regrasDeEstilo[ styles ].length; lEstilo++ ){
				itensEstilizados.push({ "referencia": String( regrasDeEstilo[styles][ lEstilo ].selectorText ), "regra": regrasDeEstilo[styles][ lEstilo ].cssText, "local": styles })
				estilosN.push({ "referencia": String( regrasDeEstilo[styles][ lEstilo ].selectorText ), "regras": regrasDeEstilo[styles][ lEstilo ].styleMap , "aplicaveis": regrasDeEstilo[styles][ lEstilo ].style })
			}
		}
	}
}

estilosItemSelecionado=( elementoSelec )=>{
	if( elementoSelec.getAttribute("id") != "" && elementoSelec.getAttribute("id") != null && elementoSelec.getAttribute("id") != undefined){
		verRegras( "#" + elementoSelec.getAttribute("id"));
	}
	if( elementoSelec.getAttribute("class") != "" && elementoSelec.getAttribute("class") != null && elementoSelec.getAttribute("class") != undefined ){
		if( elementoSelec.classList.length == 0 ){
			getById("propriedades").append( elmnts.novaDiv( "Sem atributos CLASS" ) )
		} else {
			 cNums=0;
			 while( cNums<elementoSelec.classList.length){
				verRegras( "." + elementoSelec.classList[cNums] );
				cNums++
			}
			verRegras( elementoSelec.getAttribute("class"));
		}
	}
}

verRegras=( seletorCSS )=>{
	for(todas = 0; todas < itensEstilizados.length; todas++ ){
		if( (itensEstilizados[todas].referencia.match(seletorCSS)) != null ){
			getById("propriedades").append( elmnts.novaDiv( "<h4>" + itensEstilizados[todas].local + ". ('" + seletorCSS + "') " + itensEstilizados[todas].referencia + "</h4>" + elmnts.novaDiv( itensEstilizados[todas].regra ).outerHTML ) );
			//console.log( itensEstilizados[todas].regra )
		}
	}
}

loadRegras=( seletorCSS )=>{
	for(todas = 0; todas < itensEstilizados.length; todas++ ){
		if( (itensEstilizados[todas].referencia.match(seletorCSS)) != null ){
			//getById("propriedades").append( elmnts.novaDiv( "<h3>" + seletorCSS + ". CSS</h3>" + elmnts.novaDiv( itensEstilizados[todas].regra ).outerHTML ) );
			return itensEstilizados[todas].regra;
		}
	}
}

loadRegras2=( seletorCSS )=>{
	for(todas = 0; todas < estilosN.length; todas++ ){
		if( (estilosN[todas].referencia.match(seletorCSS)) != null ){
			//getById("propriedades").append( elmnts.novaDiv( "<h3>" + seletorCSS + ". CSS</h3>" + elmnts.novaDiv( estilosN[todas].regra ).outerHTML ) );
			return estilosN[todas].regras;
		}
	}
}

function gerarTexto(){
	getById("entrada").value = getById("saida").innerHTML;
}

getById("saida").addEventListener( "change", function(){
	itensEstilizados = new Array();
	coletarEstilos();
	gerarTexto();
});

getById("saida").addEventListener( "keyup", function(){
	getById("entrada").value = getById("saida").innerHTML;
});

getById("entrada").addEventListener( "keyup", function(){
	itensEstilizados = new Array();
	coletarEstilos();
	gerarHTML();
});
let itemSelecionadoEdicao;
document.getElementById("saida").addEventListener('click', function(e) {
	itemSelecionadoEdicao = e.target;
	listarAttrs( e.target );
});

janelaExterna=()=>{
	var myWindow = window.open("", "Janela Externa", "width=800,height=450");
	myWindow.document.write( getById("entrada").value );
}

selecionado=()=>{
	tSelec=window.getSelection();
	// console.log( tSelec.anchorNode.textContent.slice( tSelec.anchorOffset, tSelec.extentOffset) );
	meioText = tSelec.extentNode.parentElement.innerHTML.slice( tSelec.anchorOffset, tSelec.extentOffset);
	inicioText = tSelec.extentNode.parentElement.innerHTML.slice( 0, tSelec.anchorOffset );
	finalText = tSelec.extentNode.parentElement.innerHTML.slice( tSelec.extentOffset, tSelec.anchorNode.textContent.length );
}

setEl=()=>{
	tSelec.extentNode.parentElement.innerHTML = tSelec.extentNode.parentElement.innerHTML.replace( meioText, "Nada")
}

fazer = {
	cText: function(){ // FUNÇÃO DE CHECAR VALOR PEGO NA SELEÇÃO DO TEXTO
		if( meioText == "" ){ return inicioText } else return meioText
	},
	link: function(){
		tSelec.extentNode.parentElement.innerHTML = tSelec.extentNode.parentElement.innerHTML.replace( meioText, "<a href='"+ fazer.cText() +"' target='_blank'>"+ fazer.cText() +"</a>")
	},
	button: function(){
		tSelec.extentNode.parentElement.innerHTML = tSelec.extentNode.parentElement.innerHTML.replace( meioText, "<button class='"+ fazer.cText() +"'>"+ fazer.cText() +"</button>")
	},
	img: function(){
		tSelec.extentNode.parentElement.innerHTML = tSelec.extentNode.parentElement.innerHTML.replace( meioText, "<img src='"+ fazer.cText() +"' alt='Legenda para a imagem em "+ fazer.cText() +".' />")
	}
}

teste=(pessoa)=>{
	switch (pessoa){
		case "Luis":
		return "Cachaçeiro"

		case "Lima":
		return "Trabalhador"
	}
}

carregarItem=()=>{
	
	upFile = getById("nomeArquivoUp").files[0];
	leitor = new FileReader();
	leitor.addEventListener("load", upFile);
	leitor.readAsText( upFile );
	setTimeout(function(){
		getById("entrada").value = leitor.result;
		gerarHTML();
	}, 200)
}
