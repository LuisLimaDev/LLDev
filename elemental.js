//elemental.js

let ancora, paragrafo, spanDeTexto, imagem, novoFrame, novoBotao, novaDiv, svgTag, novoPattern, patternImage, nLinearGradient, corDeParada2, corDeParada1, estilosSVG, agrupamentoSVG, formaPath;

let getById = (id) => document.getElementById(id);
let getByClass = (cl) => document.getElementsByClassName(cl);
let novoElm = (el) => document.createElement(el);
let setID = ( htmlItem, idParaAplicar ) => { htmlItem.id = idParaAplicar }

/**
inverter = function( textoParaInverter ) {
    var espacoNoTexto = '';
    for (var i = textoParaInverter.length - 1; i >= 0; i--) {
        espacoNoTexto += textoParaInverter[i];
    }
    return espacoNoTexto;
}
**/



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
        estilosSVG.append( itensDeEstiloSVG );
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
        agrupamentoSVG.append( itensParaAgrupar );
        return agrupamentoSVG;
    }

    novaPolyforma( idDaForma, desenhoDaForma, estilosDaPolyforma ){
        return "<polygon id='" + idDaForma + "' points='" + desenhoDaForma + "' style='" + estilosDaPolyforma + "'/>";
    }
	
	novoCirculo( distanciaX, distanciaY, tamanhoDoRadio, identificacao, estilosDoCirculoCSS ){
		return '<circle id="' + identificacao + '" cx="' + distanciaX + '" cy="' + distanciaY + '" r="' + tamanhoDoRadio + '" style="' + estilosDoCirculoCSS + '" />'
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
