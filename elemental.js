//elemental.js

let ancora, paragrafo, spanDeTexto, imagem, novoFrame, novoBotao, novaDiv, svgTag, novoPattern, patternImage, nLinearGradient, corDeParada2, corDeParada1, estilosSVG, agrupamentoSVG, formaPath;

let getById = (id) => document.getElementById(id);
let getByClass = (cl) => document.getElementsByClassName(cl);
let novoElm = (el) => document.createElement(el);


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
        //nLinearGradient.setAttributeNS( null, "gradientUnits", "objectBoundingBox" );
        nLinearGradient.setAttributeNS( null, "id", idDaGrade );
        nLinearGradient.setAttributeNS( null, "x1", "0%" );
        nLinearGradient.setAttributeNS( null, "x2", "100%" );
        nLinearGradient.setAttributeNS( null, "y1", "0%" );
        nLinearGradient.setAttributeNS( null, "y2", "100%" );

        corDeParada1 = novoElm("linearGradient");
        corDeParada1.setAttributeNS( null, "opacity", "1.0" );
        corDeParada1.setAttributeNS( null, "offset", "0%" );
        corDeParada1.setAttributeNS( null, "stop-color", corInicial );

        corDeParada2 = novoElm("linearGradient");
        corDeParada2.setAttributeNS( null, "opacity", "1.0" );
        corDeParada2.setAttributeNS( null, "offset", "100%" );
        corDeParada2.setAttributeNS( null, "stop-color", corFinal );

        nLinearGradient.append( corDeParada1, corDeParada2 );
        return nLinearGradient;
    }

    novoGrupo( itensParaAgrupar ){
        agrupamentoSVG = novoElm("g")
        agrupamentoSVG.id = idDoGrupo;
        agrupamentoSVG.append( itensParaAgrupar );
        return agrupamentoSVG;
    }

    novaPolyforma( idDaForma, desenhoDaForma, estilosDaPolyforma ){
        return "<polygon id='" + idDaForma + "' points='" + desenhoDaForma + "' style='" + estilosDaPolyforma + "'/>";
    }
	
	novoCirculo( distanciaX, distanciaY, tamanhoDoRadio, identificacao, estilosDoCirculoCSS ){
		return '<circle id="' + identificacao + '" cx="' + distanciaX + '" cy="' + distanciaX + '" r="' + tamanhoDoRadio + '" style="' + estilosDoCirculoCSS + '" />'
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
