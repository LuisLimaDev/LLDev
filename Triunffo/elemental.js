//elemental.js

let ancora, paragrafo, spanDeTexto, imagem, novoFrame, novoBotao, novaDiv;

let getById = (id) => document.getElementById(id);
let getByClass = (cl) => document.getElementsByClassName(cl);
let novoElm = (el) => document.createElement(el);

inverter = function( textoParaInverter ) {
    var espacoNoTexto = '';
    for (var i = textoParaInverter.length - 1; i >= 0; i--) {
        espacoNoTexto += textoParaInverter[i];
    }
    return espacoNoTexto;
}

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