//elemental.js

let ancora, paragrafo, spanDeTexto, imagem, novoFrame, novoBotao, novaDiv, novaSessao, svgTag, novoPattern, patternImage, nLinearGradient, corDeParada2, corDeParada1, estilosSVG, agrupamentoSVG, formaPath;

let getById = (id) => document.getElementById(id);
let getByClass = (cl) => document.getElementsByClassName(cl);
let novoElm = (el) => document.createElement(el);
let setID = ( htmlItem, idParaAplicar ) => { htmlItem.id = idParaAplicar };
let teste = ({ parte1(entrada){ console.log(entrada) }, parte2(entrada){alert(entrada)} });
let parametrosDaURL = ( parametroDeclarada ) => {
	pURL = new URL(window.location.href);
	return pURL.searchParams.get( parametroDeclarada )
}

// elemental 2.0

lmnt = ({
	lmntName,
	attrID,
	attrCLASS,
	attrNAME,
	attrTYPE,
	attrTARGET,
	attrHREF,
	attrSRC,
	attrSTYLE,
	attrONCLICK,
	attrVALUE,
	attrCHECKED,
	attrENABLED,
	attrFOR,
	attrPLACEHOLDER,
	contHTML,
	contTexto,
	editavel,
	ajuda
}) => {
	lmnt = novoElm( lmntName );
	if ( attrID ){ lmnt.id = attrID }
	if ( attrCLASS ){ lmnt.setAttribute("class", attrCLASS ) }
	if ( attrNAME ){ lmnt.name = attrNAME }
	if ( attrTYPE ){ lmnt.target = attrTYPE }
	if ( attrTARGET ){ lmnt.target = attrTARGET }
	if ( attrHREF ){ lmnt.href = attrHREF }
	if ( attrSRC ){ lmnt.src = attrSRC }
	if ( attrSTYLE ){ lmnt.style = attrSTYLE }
	if ( attrONCLICK ){ lmnt.setAttribute( "onclick", attrONCLICK ) }
	if ( attrVALUE ){ lmnt.value = attrVALUE }
	if ( attrCHECKED ){ lmnt.checked = attrCHECKED }
	if ( attrENABLED ){ lmnt.enabled = attrENABLED }
	if ( attrFOR ){ lmnt.for = attrFOR }
	if ( attrPLACEHOLDER ){ lmnt.placeholder = attrPLACEHOLDER }
	if ( contHTML ){ lmnt.innerHMTL = contHTML }
	if ( contTexto ){ lmnt.innerHMTL = contTexto }
	if ( editavel ){ lmnt.setAttribute("contentEditable", editavel ) }
	if ( ajuda != null || ajuda != undefined ){ return "lmntName, attrID, attrCLASS, attrNAME, attrTYPE, attrTARGET, attrHREF, attrSRC, attrSTYLE, attrONCLICK, attrVALUE, attrCHECKED, attrENABLED, attrFOR, attrPLACEHOLDER, contHTML, contTexto, editavel, ajuda"
	} else {return lmnt}
}

criar = ({nomeDoElemento, atributoID, atributoName, atributoValue, atributoType, atributoClass, atributoHREF, atributoSRC, atributoTarget, atributoOnClick, atributoStyle, conteudoInterno }) => {
	elmentoAleatorio = novoElm( nomeDoElemento );
	if ( conteudoInterno ){ elmentoAleatorio.innerHTML = conteudoInterno; }
	if ( atributoID ){ elmentoAleatorio.id = atributoID; }
	if ( atributoClass ){ elmentoAleatorio.setAttribute("class", atributoClass);}
	if ( atributoValue ){ elmentoAleatorio.value = atributoValue;}
	if ( atributoType ){ elmentoAleatorio.type = atributoType;}
	if ( atributoTarget ){ elmentoAleatorio.target = atributoTarget;}
	if ( atributoHREF ){ elmentoAleatorio.href = atributoHREF;}
	if ( atributoSRC ){ elmentoAleatorio.setAttribute("src", atributoSRC);}
	if ( atributoName ){ elmentoAleatorio.name = atributoName;}
	if ( atributoOnClick ){ elmentoAleatorio.setAttribute("onclick", atributoOnClick );}
	if ( atributoStyle ){ elmentoAleatorio.style = atributoStyle;}
	return elmentoAleatorio;
}

	trocarJanela = function( janelaQueSai, janelaQueEntra ){
		tirarJanela( janelaQueSai );
		trazerJanela( janelaQueEntra );
	}

	tirarJanela = function( objetoPraTirar ) {
		objetoPraTirar.style.display = "none";
		objetoPraTirar.style.top = "-500%";
	}

	trazerJanela = function( objetoPraEntrar ) {
		objetoPraEntrar.style.display = "block";
		objetoPraEntrar.style.top = "50%";
	}

	inverter = function( textoParaInverter ) {
		var espacoNoTexto = '';
		for (var i = textoParaInverter.length - 1; i >= 0; i--) {
			espacoNoTexto += textoParaInverter[i];
		}
		return espacoNoTexto;
	}

	checarZero = function(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}

	var mt = new Date(), diaDaSemana, mesDoAno;

class llTempo {

	diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	mesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	tagData = mt.getFullYear().toString() + checarZero( mt.getMonth()+1 ) + checarZero( mt.getDate() );
	tagDataAtualizada(){
		mt = new Date();
		return mt.getFullYear().toString() + checarZero( mt.getMonth()+1 ) + checarZero( mt.getDate() );
	}
	tagDataFormatada( separador ){
		mt = new Date();
		return mt.getFullYear().toString() + separador.toString() + checarZero( mt.getMonth()+1 ) + separador.toString() + checarZero( mt.getDate() );
	}

	tagHora = checarZero( mt.getHours() ).toString() + checarZero( mt.getMinutes() ) + checarZero( mt.getSeconds() ) + checarZero( mt.getMilliseconds() );
	tagHoraAtualizada(){ mt = new Date(); return checarZero( mt.getHours() ).toString() + checarZero( mt.getMinutes() ) + checarZero( mt.getSeconds() ) + checarZero( mt.getMilliseconds() ); }
	tagHoraFormatada( separador ){ mt = new Date(); return checarZero( mt.getHours() ).toString() + separador.toString() + checarZero( mt.getMinutes() ) + separador.toString() + checarZero( mt.getSeconds() ) + ".".toString() + checarZero( mt.getMilliseconds() ); }

	dataFormatadaPTbr( entradaDaData, separador ){
		entradaDaData = new Date( entradaDaData );
		return checarZero( entradaDaData.getDate() ) + separador.toString() + checarZero( entradaDaData.getMonth()+1 ) + separador.toString() + entradaDaData.getFullYear().toString();
	}

	dataPorExtenso( entradaDaData ){
		diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sexta"];
		mesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

		entradaDaData = new Date( entradaDaData );
		return entradaDaData.getDate() + " de " + mesDoAno[entradaDaData.getMonth()] + " de " + entradaDaData.getFullYear();

	}

	nada({ vazio }){
		return vazio ? vazio : "objeto não utilizado"
	}

}

/**
**/




class Elementos {

	acrescentar( idDoElementoPai, elementoFilho ){
		if( !(!(idDoElementoPai.toString().match("HTML"))) === true ){ idDoElementoPai.appendChild( elementoFilho ) } else {
		getById( idDoElementoPai ).appendChild( elementoFilho );
		}
	}

	novoLink( textoInterno, destinoDoLink, targetLink ){
		ancora = novoElm("a");
		ancora.innerHTML = textoInterno;
		ancora.href = destinoDoLink;
		if( targetLink == "" || targetLink == null ){ console.log("feito!") } else { ancora.target = targetLink }
		return ancora;
	}
	
	novaDiv( conteudoDaDiv ){
        novaDiv = novoElm("div");
        novaDiv.innerHTML = conteudoDaDiv;
        return novaDiv;
    }

	novaSessao( conteudoDaSection ){
        novaSessao = novoElm("section");
        novaSessao.innerHTML = conteudoDaSection;
        return novaSessao;
    }

    novoParagrafo( linhaDoParagrafo ){
		paragrafo = novoElm("p");
		paragrafo.innerHTML = linhaDoParagrafo;
		return paragrafo;
	}
	
	novoSpan( blocoDeTexto ){
		spanDeTexto = novoElm("span");
		spanDeTexto.innerHTML = blocoDeTexto;
		return spanDeTexto;
	}
	
	novaImagem( localDaimagem, descreverImagem ){
		imagem = novoElm("img");
		imagem.src = localDaimagem;
		if ( descreverImagem == "" || descreverImagem == null ){ imagem.alt = "imagem" } else { imagem.alt = descreverImagem }
		return imagem;
	}

	novoIframe( nomeDoIframe, paginaDoFrame ){
		novoFrame = novoElm("iframe");
		novoFrame.name = nomeDoIframe;
		novoFrame.src = paginaDoFrame;
		novoFrame.setAttribute( "sandbox", "allow-scripts allow-same-origin" );
		if( nomeDoIframe == "youtube" ){ novoFrame.setAttribute("X-Frame-Options", "SAMEORIGIN") }
		return novoFrame;
	}

    novoButton( textoDoBotao, funcaoDele, classeDeEstilos ){
        novoBotao = novoElm("button");
        novoBotao.id = textoDoBotao;
        novoBotao.innerText = textoDoBotao;
        novoBotao.setAttribute("onclick", funcaoDele );
        if( classeDeEstilos != null || classeDeEstilos != ""){ novoBotao.setAttribute("class", classeDeEstilos )}
        return novoBotao;
    }

}

class ElementosSVG {
    novoSVG( elementoInternoSVG ){
        svgTag = document.createElementNS( "http://www.w3.org/2000/svg", "svg");
        svgTag.setAttribute( "xmlns", "http://www.w3.org/2000/svg" );
        svgTag.setAttribute( "xmlns:xlink", "http://www.w3.org/1999/xlink" );
        svgTag.append( elementoInternoSVG );
        return svgTag;
    }

    novoDefs( itensDeEstiloSVG ){ // CRIA UM ITEM DE ESTILOS DO "SVG"
        estilosSVG = novoElm("defs");
        estilosSVG.innerHMTL = itensDeEstiloSVG;
        return estilosSVG;
    }

    novoPattern( linkParaImagem, idDoPattern ){ // ELEMENTO DE PLANO DE FUNDO
        novoPattern = novoElm("pattern");
        novoPattern.setAttributeNS("preserveAspectRatio", "none" );
        novoPattern.setAttributeNS("id", idDoPattern );
        novoPattern.setAttributeNS( null, "width", "100%" );
        novoPattern.setAttributeNS( null, "height", "100%" );
        novoPattern.append( imagemSVG( "imagePattern", linkParaImagem ) );
        return novoPattern;
    }

    imagemSVG( idDaImagem, linkDaImagem ){
        patternImage = novoElm("image");
        patternImage.setAttributeNS("xlink:href", linkDaImagem);
        patternImage.setAttributeNS( null, "width", "100%" );
        patternImage.setAttributeNS( null, "height", "100%" );
        return patternImage;
    }

    linearGradient2CoresA( idDaGrade, corInicial, corFinal ){ // CRIA UM PLANO DE FUNDO
		return '<linearGradient id="' + idDaGrade + '" y1="0.024" x2="1" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="' + corInicial + '" ></stop><stop offset="1" stop-color="' + corFinal + '"></stop></linearGradient>';
	}

	linearGradient2Cores( idDaGrade, corInicial, corFinal ){ // CRIA UM PLANO DE FUNDO
        nLinearGradient = novoElm("linearGradient");
        nLinearGradient.setAttributeNS( null, "gradientUnits", "objectBoundingBox" );
        nLinearGradient.setAttributeNS( null, "id", idDaGrade );

        corDeParada1 = novoElm("linearGradient");
        corDeParada1.setAttributeNS( null, "offset", "0" );
        corDeParada1.setAttributeNS( null, "stop-color", corInicial );

        corDeParada2 = novoElm("linearGradient");
        corDeParada2.setAttributeNS( null, "offset", "0" );
        corDeParada2.setAttributeNS( null, "stop-color", corFinal );

        nLinearGradient.append( corDeParada1, corDeParada2 );
        return nLinearGradient;
    }

    novoGrupo( itensParaAgrupar, idDoGrupo ){
        agrupamentoSVG = novoElm("g")
        agrupamentoSVG.id = idDoGrupo;
        agrupamentoSVG.innerHTML = itensParaAgrupar;
        return agrupamentoSVG;
    }

    novaPolyforma( idDaForma, desenhoDaForma, estilosDaPolyforma ){
        return "<polygon id='" + idDaForma + "' points='" + desenhoDaForma + "' style='" + estilosDaPolyforma + "'/>";
    }
	
	novoCirculo( distanciaX, distanciaY, tamanhoDoRadio, identificacao, estilosDoCirculoCSS ){
		return '<circle id="' + identificacao + '" cx="' + distanciaX + '" cy="' + distanciaY + '" r="' + tamanhoDoRadio + '" style="' + estilosDoCirculoCSS + '" />'
	}

	novoRect( idDoRect, valPosX, valPosY, valLarg, valAlt, estilosDoRect ){
		return '<rect id="' + idDoRect + '" x="' + valPosX + '" y="' + valPosY + '"  width="' + valLarg + '" height="' + valAlt + '" style="' + estilosDoRect + '"></rect>'
	}
	formatoPositivo = "0,10, 10,10, 10,0, 10,10, 20,10, 10,10, 10,20, 10,10";
	formatoX = "3,0, 20,20, 10,10, 20,0, 0,20, 10,10";
	formaSetaD = "20,10, 10,0, 20,10, 0,10, 20,10, 10,20";
	formaSetaE = "0,10, 10,0, 0,10, 20,10, 0,10, 10,20";
}

let novoForm, inputTexto, inputNumero, inputCalendario, inputRadio, inputCheckbox, novaLabel, novoFieldset, novoTextarea;

// FORMULARIOS
class FormLL {
	novoForm( itensDoFormulario, metodoDeEnvio, destinoAction ){
		novoForm = novoElm("form");
		novoForm.method = metodoDeEnvio;
		novoForm.action = destinoAction;
		novoForm.innerHMTL = itensDoFormulario;
		return novoForm;
	}
	inputTexto( nomeDeElemento, idDoElemento, valorInterno ){
		inputTexto = novoElm("input");
		inputTexto.type = "text";
		inputTexto.name = nomeDeElemento;
		inputTexto.id = idDoElemento;
		inputTexto.value = valorInterno;
		return inputTexto;
	}
	inputNumero( nomeDeElemento, idDoElemento, valorInterno ){
		inputNumero = novoElm("input");
		inputNumero.type = "number";
		inputNumero.name = nomeDeElemento;
		inputNumero.id = idDoElemento;
		inputNumero.value = valorInterno;
		return inputNumero;
	}
	inputCalendario( nomeDeElemento, idDoElemento, valorInterno ){
		inputCalendario = novoElm("input");
		inputCalendario.type = "date";
		inputCalendario.name = nomeDeElemento;
		inputCalendario.id = idDoElemento;
		inputCalendario.value = valorInterno;
		return inputCalendario;
	}
	inputRadio( nomeDeElemento, idDoElemento, valorInterno ){
		inputRadio = novoElm("input");
		inputRadio.type = "radio";
		inputRadio.name = nomeDeElemento;
		inputRadio.id = idDoElemento;
		inputRadio.value = valorInterno;
		return inputRadio;
	}
	inputCheckbox( nomeDeElemento, idDoElemento, valorInterno ){
		inputCheckbox = novoElm("input");
		inputCheckbox.type = "check";
		inputCheckbox.name = nomeDeElemento;
		inputCheckbox.id = idDoElemento;
		inputCheckbox.value = valorInterno;
		return inputCheckbox;
	}
	novaLabel( textoInterno, elementoReferente ){
		novaLabel = novoElm("label");
		novaLabel.innerText = textoInterno;
		if( elementoReferente.toString() == "[object HTMLInputElement]"){
			novaLabel.append( elementoReferente );
		} else {
			novaLabel.for = elementoReferente;
		}
		return novaLabel;
	}
	novoFieldset( nomeDoFieldset, itensInternos ){
		novoFieldset = novoElm("fieldset");
		novoFieldset.name = nomeDoFieldset;
		novoFieldset.innerHMTL = itensInternos;
		return novoFieldset;
	}
	novoTextarea( nomeDeElemento, idDoElemento, valorInterno ){
		novoTextarea = novoElm("textarea");
		novoTextarea.name = nomeDeElemento;
		novoTextarea.id = idDoElemento;
		novoTextarea.value = valorInterno;
		return novoTextarea;
	}
}

var personalizar = new Elementos, objetoDeRolagem;

rolagemPersonalizada = function( documentoHTML ){
	tamanhoTotalDaPagina = documentoHTML.offsetHeight;
	objetoDeRolagem = personalizar.novaDiv("");
	objetoDeRolagem.id = "objetoDeRolagem";
	documentoHTML.append( objetoDeRolagem );
}

rolarObjeto = function(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	objetoDeRolagem.style.height = ( window.innerHeight / 10 ) + "px";
	objetoDeRolagem.style.top = Math.round( (winScroll / height) * (document.documentElement.scrollHeight / 6.69 ) ) + "%";
}

function download(nomeDoArquivo, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', nomeDoArquivo);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}


/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
/************************* OPERAÇÕES DO LOCAL STORAGE *************************/
/******************************************************************************/
/******************************************************************************/
	/**********************************************************************/

		let checarIDMemoria = ( idParaVer )=> !(!(localStorage.getItem( idParaVer )));

		function checarMemoria( textoPraVerificar, idNaMemoria ){
			if( checarIDMemoria( idNaMemoria ) == true ){
				listaAssistidos = localStorage.getItem( idNaMemoria );
				if( ( listaAssistidos.match( textoPraVerificar ) != null ) == true ){
					resultado = true
				} else {
					resultado = false;
				}
			} else {
				resultado = false;
			}
			return resultado
		}
		// existeNaMemoria = checarMemoria( textoPraVerificar, idNaMemoria );

		function addNaMemoria( itemParaAdicionar, idDaMemoria ){ // INSERT INTO idDaMemoria VALUES ( itemParaAdicionar )
			tempo = new llTempo;
			if( localStorage.getItem( idDaMemoria ) == null ){
				conteudo = "{'conteudo':" + itemParaAdicionar + ", 'dataDeRegistro':'" + tempo.tagDataFormatada("/") + "', 'horaDeRegistro':'" + tempo.tagHoraFormatada(":") + "', 'id':'" + tempo.tagDataAtualizada().toString() + tempo.tagHoraAtualizada().toString() + "'}";
			} else {
				conteudo = "{'conteudo':" + itemParaAdicionar + ", 'dataDeRegistro':'" + tempo.tagDataFormatada("/") + "', 'horaDeRegistro':'" + tempo.tagHoraFormatada(":") + "', 'id':'" + tempo.tagDataAtualizada().toString() + tempo.tagHoraAtualizada().toString() + "'}," + localStorage.getItem( idDaMemoria );
			}
			localStorage.setItem( idDaMemoria , conteudo);
		}
		// addNaMemoria( itemParaAdicionar, idDaMemoria );

		function addSemRepetir( valorPraVerificar, idNaMemoria ){
			if( checarMemoria(valorPraVerificar, idNaMemoria) == false ){
				addNaMemoria(valorPraVerificar, idNaMemoria);
			}
		}

	/**************************************************************************/
	/*********************** CONSULTAS DO LOCAL STORAGE ***********************/
	/**************************************************************************/

		function consultarMemoria( itemPesquisado, idDaMemoria ){
			if( checarMemoria(itemPesquisado, idDaMemoria) == false ){
				resultado = null
			} else {
				resultado = new Array();
				linha = new Array();
				compativeis = 0;
				while( compativeis < todaMemoria( idDaMemoria ).length ){
					if( JSON.stringify( todaMemoria( idDaMemoria )[compativeis] ).match( itemPesquisado ) != null ){
						resultado.push({ 'linha':todaMemoria( idDaMemoria )[compativeis], 'indice':compativeis });
					}
					compativeis++;
				}
			}
			return resultado;
		}

		function buscarIdNaMemoria( nomeDaColuna, itemPesquisado, idDaMemoria ){ // SELECT * FROM idDaMemoria WHERE nomeDaColuna LIKE itemPesquisado
			if( checarMemoria(itemPesquisado, idDaMemoria) == false ){
				resultado = null
			} else {
				resultado = new Array();
				linha = new Array();
				compativeis = 0;
				while( compativeis < todaMemoria( idDaMemoria ).length ){
					if( JSON.stringify( todaMemoria( idDaMemoria )[compativeis][ nomeDaColuna ] ).match( itemPesquisado ) != null ){
						resultado.push({ 'linha':todaMemoria( idDaMemoria )[compativeis], 'indice':compativeis });
					}
					compativeis++;
				}
			}
			return resultado;
		}

		function todaMemoria( idDaMemoria ){ // SELECT * FROM idDaMemoria
			if( checarIDMemoria( idDaMemoria ) == true ){
				todoArmazenamento = eval("[" + localStorage.getItem( idDaMemoria ) + "]");
			} else { todoArmazenamento = null }
			return todoArmazenamento
		}

	/**************************************************************************/
	/******************* OPERAÇÕES DE UPDATE NO LOCAL STORAGE *****************/
	/**************************************************************************/

		function alterarNaMemoria( colunaDaTabela, idItemPraAlterar, itemParaAdicionar, idDaMemoria ){ // UPDATE idDaMemoria SET ( itemParaAdicionar ) WHERE colunaDaTabela LIKE idItemPraAlterar
			if( !( buscarIdNaMemoria( colunaDaTabela, idItemPraAlterar, idDaMemoria ) == null) == false ){
				console.log("Nada alterado")
			} else {
				itensEncontrados = buscarIdNaMemoria( colunaDaTabela, idItemPraAlterar, idDaMemoria );
				todosOsItens = todaMemoria( idDaMemoria );
				if( itensEncontrados.length > 0 ){
					conferir = 0;
					while( conferir < itensEncontrados.length ){
						todosOsItens[itensEncontrados[conferir].indice].conteudo = itemParaAdicionar;
						// todosOsItens[itensEncontrados[conferir].indice] = "{'conteudo':" + itemParaAdicionar + ", 'dataDeRegistro':'" + tempo.tagDataFormatada("/") + "', 'horaDeRegistro':'" + tempo.tagHoraFormatada(":") + "', 'id':'" + tempo.tagDataAtualizada().toString() + tempo.tagHoraAtualizada().toString() + "'}";;
						// console.log( todosOsItens[itensEncontrados[conferir].indice] );
						// console.log( {'conteudo': itemParaAdicionar , 'dataDeRegistro': tempo.tagDataFormatada("/") , 'horaDeRegistro': tempo.tagHoraFormatada(":") , 'id': tempo.tagDataAtualizada().toString() + tempo.tagHoraAtualizada().toString() } );
						conferir++;
					}
				}
				todosOsItens = reOrganizarString(todosOsItens)
				localStorage.setItem( idDaMemoria, todosOsItens )
			}
		}

	/**************************************************************************/
	/****************** OPERAÇÕES DE EXCLUSÃO NO LOCAL STORAGE ****************/
	/**************************************************************************/

		function removerIdDaMemoria( colunaDaTabela, itemParaRemover, idDaMemoria ){ // DELETE FROM idDaMemoria WHERE colunaDaTabela LIKE itemParaRemover
			if( !( buscarIdNaMemoria( colunaDaTabela, itemParaRemover, idDaMemoria ) == null) == false ){
				console.log("Nada alterado")
			} else {
				itensEncontrados = buscarIdNaMemoria( colunaDaTabela, itemParaRemover, idDaMemoria );
				todosOsItens = todaMemoria( idDaMemoria );
				if( itensEncontrados.length > 0 ){
					conferir = 0;
					while( conferir < itensEncontrados.length ){
						todosOsItens[itensEncontrados[conferir].indice] = conferir;
						conferir++;
					}
				}
				todosOsItens = reOrganizarString(todosOsItens)
				localStorage.setItem( idDaMemoria, todosOsItens )
			}
		}

		function removerDaMemoria( itemParaRemover, idDaMemoria ){ // DELETE FROM idDaMemoria WHERE colunaDaTabela LIKE itemParaRemover
			if( !(consultarMemoria( itemParaRemover, idDaMemoria ) == null) == false ){
				console.log("Nada alterado")
			} else {
				itensEncontrados = consultarMemoria( itemParaRemover, idDaMemoria );
				todosOsItens = todaMemoria( idDaMemoria );
				if( itensEncontrados.length > 0 ){
					conferir = 0;
					while( conferir < itensEncontrados.length ){
						todosOsItens[itensEncontrados[conferir].indice] = conferir;
						conferir++;
					}
				}
				todosOsItens = reOrganizarString(todosOsItens)
				localStorage.setItem( idDaMemoria, todosOsItens )
			}
		}

		function reOrganizarString( itensParaAdicionar ){
			linhas = "";
			total = 0;
			while( total < itensParaAdicionar.length ){
				if( isNaN( itensParaAdicionar[total] ) == true ){
					linhas = JSON.stringify( itensParaAdicionar[total] ) + "," + linhas;
					// linhas = JSON.stringify( itensParaAdicionar[total] )
				}
				total++;
			}
			return linhas
		}

	/**********************************************************************/
/******************************************************************************/
/******************************************************************************/
/********************* FIM DAS OPERAÇÕES DO LOCAL STORAGE *********************/
/******************************************************************************/
/******************************************************************************/
/******************************************************************************/
