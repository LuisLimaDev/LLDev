/** padrao.js **/

	janela = window;
	larguraTotal = janela.innerWidth;
	alturaTotal = janela.innerHeight;
	corPadrao = "rgb(255 102 0)"; //

	paddingCentroAltura = "";
	paddingCentroLargura = "";
	marginCentroAltura = "";
	
	let root = document.documentElement;
    root.style.setProperty('--alturaTotal', alturaTotal - 71 + "px");
    root.style.setProperty('--larguraTotal', larguraTotal + "px");
    root.style.setProperty('scroll-behavior', 'smooth');

    /*****************************************************/
    /************** PERSONALIZAÇÃO DE CORES **************/
    /*****************************************************/
    root.style.setProperty('--corPadrao1', '#6ce7ff');
    root.style.setProperty('--corPadrao2', '#51b9c5');
    root.style.setProperty('--branco7', 'rgba(255,255,255,0.75)');
    root.style.setProperty('--branco2', 'rgba(255,255,255,0.25)');
    root.style.setProperty('--preto7', 'rgba(0,0,0,0.75)');
    

	root.addEventListener("mousemove", e => {
		root.style.setProperty('--mouse-x', e.clientX + "px");
		root.style.setProperty('--mouse-x-cent', "-" + Math.round( ( e.clientX / 100 ) * 10 ) + "%");
		root.style.setProperty('--mouse-y', e.clientY + "px");
		root.style.setProperty('--mouse-y-cent', "-" + Math.round( ( e.clientY /100) * 15 ) + "%");

/**
	// pra usar isso, a classe e o CSS precisam estar aplicados
	.itemQueSeguirMouse{
		width: 50px;
		height: 50px;
		background: red;
		position: absolute;
		left: var(--mouse-x);
		top: var(--mouse-y);
	}

**/
	});

	inverter = function( textoParaInverter ) {
		var espacoNoTexto = '';
		for (var i = textoParaInverter.length - 1; i >= 0; i--) {
			espacoNoTexto += textoParaInverter[i];
		}
		return espacoNoTexto;
	}

	animMoverBolhas = function(){
		posInicialX = ( Math.random() * window.innerWidth );
		posInicialY = ( Math.random() * window.innerHeight );
		animacaoAleatoria = '<style>@keyframes moverBolhas{ 0%{ transform: translate(' + posInicialX + 'px,' + posInicialY + 'px) }50%{ transform: translate(' + Math.random() * window.innerWidth + 'px,' + Math.random() * window.innerHeight + 'px) }100%{ transform: translate(' + posInicialX + 'px,' + posInicialY + 'px) } }</style>';
		document.head.innerHTML = document.head.innerHTML + animacaoAleatoria;
	}

	animBolhasPos = function( posInicialX, posInicialY, idDaBolha ){
		//posInicialX = ( Math.random() * window.innerWidth );
		//posInicialY = ( Math.random() * window.innerHeight );
		animacaoAleatoria = '<style>@keyframes moverBolhas' + idDaBolha + ' { 0%{ transform: translate(' + posInicialX + 'px,' + posInicialY + 'px) }25%{ transform: translate(' + Math.random() * window.innerWidth + 'px,' + Math.random() * window.innerHeight + 'px) }50%{ transform: translate(' + Math.random() * window.innerWidth + 'px,' + Math.random() * window.innerHeight + 'px) }75%{ transform: translate(' + Math.random() * window.innerWidth + 'px,' + Math.random() * window.innerHeight + 'px) }100%{ transform: translate(' + posInicialX + 'px,' + posInicialY + 'px) } }</style>';
		document.head.innerHTML = document.head.innerHTML + animacaoAleatoria;
	}

	animStars = function( posInicialX, posInicialY, idDaBolha ){
		//posInicialX = ( Math.random() * window.innerWidth );
		//posInicialY = ( Math.random() * window.innerHeight );
		animacaoAleatoria = '<style>@keyframes moverBolhas' + idDaBolha + ' { 0%{ transform: translate(' + posInicialX + '%,' + posInicialY + '%) }25%{ transform: translate(' + Math.random() * posInicialX + '%,' + Math.random() * posInicialY + '%) }50%{ transform: translate(' + Math.random() * posInicialX + '%,' + Math.random() * posInicialY + '%)  }75%{ transform: translate(' + Math.random() * posInicialX + '%,' + Math.random() * posInicialY + '%)  }100%{ transform: translate(' + posInicialX + '%,' + posInicialY + '%)  } }</style>';
		document.head.innerHTML = document.head.innerHTML + animacaoAleatoria;
	}

	class Padrao{
		
		coresPadrao(){
			document.style.setProperty('--corPadrao1', corPadrao );
		}

		getById(id){
			return document.getElementById(id);
		}

		getByClass(cl){
			return document.getElementsByClassName(cl);
		}

		criarNovoEl(el){
			return document.createElement(el);
		}

		alturaMinima( elementoParaAjustarAltura ){
			elementoParaAjustarAltura.style.minHeight = alturaTotal + "px";
		}

		ajustarAlturaDoQuadrado( elementoParaAjustarAlturaPraQuadrado ){
			elementoParaAjustarAlturaPraQuadrado.style.minHeight = elementoParaAjustarAlturaPraQuadrado.offsetWidth + "px";
		}

		centralizarPositionFixed( elementoPraCentralizarFixed ){
			elementoPraCentralizarFixed.style.top = Math.round( alturaTotal / 2 ) + "px";
			elementoPraCentralizarFixed.style.left = Math.round( larguraTotal / 2 ) + "px";
		}

		centralizarLarguraTotalMargin( elementoPraAplicarMarginL ){
			elementoPraAplicarMarginL.style.marginLeft = Math.round( (larguraTotal / 2 ) - elementoPraAplicarMarginL.offsetWidth ) + "px";
			elementoPraAplicarMarginL.style.marginRight = Math.round( (larguraTotal / 2 ) - elementoPraAplicarMarginL.offsetWidth ) + "px";
		}

		centralizarAlturaTotalMargin( elementoPraAplicarMarginA ){
			elementoPraAplicarMarginA.style.marginTop = Math.round( (alturaTotal - elementoPraAplicarMarginA.offsetHeight) / 2 ) + "px";
			elementoPraAplicarMarginA.style.marginBottom = Math.round( (alturaTotal - elementoPraAplicarMarginA.offsetHeight) / 2 ) + "px";
		}

		centralizarAlturaTotalPadding( elementoPraAplicarPaddingA ){
			elementoPraAplicarPaddingA.style.paddingTop = Math.round( (alturaTotal / 2 ) - elementoPraAplicarPaddingA.offsetHeight ) + "px";
			elementoPraAplicarPaddingA.style.paddingBottom = Math.round( (alturaTotal / 2 ) - elementoPraAplicarPaddingA.offsetHeight ) + "px";
		}

		centralizarLarguraTotalPadding( elementoPraAplicarPaddingL ){
			elementoPraAplicarPaddingL.style.paddingLeft = Math.round( (larguraTotal - elementoPraAplicarPaddingL.offsetWidth) / 2 ) + "px";
			elementoPraAplicarPaddingL.style.paddingRight = Math.round( (larguraTotal - elementoPraAplicarPaddingL.offsetWidth) / 2 ) + "px";
		}
		
		alinharPaddingCentroAlturaElementoPai( elementoFilhoA ){
			elementoFilhoA.parentElement.style.paddingTop = Math.round( ( alturaTotal - elementoFilhoA.offsetHeight ) / 2) + "px";
			elementoFilhoA.parentElement.style.paddingBottom = Math.round( ( alturaTotal - elementoFilhoA.offsetHeight ) / 2) + "px";
		}
		
		alinharPaddingCentroLarguraElementoPai( elementoFilhoL ){
			elementoFilhoL.parentElement.style.paddingLeft = Math.round( ( larguraTotal - elementoFilhoL.offsetHeight ) / 2) + "px";
			elementoFilhoL.parentElement.style.paddingRight = Math.round( ( larguraTotal - elementoFilhoL.offsetHeight ) / 2) + "px";
		}
		
		alinharMarginCentroAlturaElementoPai( elementoFilhoA ){
			elementoFilhoA.parentElement.style.marginTop = Math.round( ( alturaTotal - elementoFilhoA.offsetHeight ) / 2) + "px";
			elementoFilhoA.parentElement.style.marginBottom = Math.round( ( alturaTotal - elementoFilhoA.offsetHeight ) / 2) + "px";
		}
		
		alinharMarginCentroLarguraElementoPai( elementoFilhoL ){
			elementoFilhoL.parentElement.style.marginLeft = Math.round( ( larguraTotal - elementoFilhoL.offsetHeight ) / 2) + "px";
			elementoFilhoL.parentElement.style.marginRight = Math.round( ( larguraTotal - elementoFilhoL.offsetHeight ) / 2) + "px";
		}

		verVazio( texto ){
			if (texto == ""){
				texto = "vazio";
			}
			return texto;
		}

		de0a9( numeroParaVer ){
			if ( numeroParaVer < 10 ){
				return "0"+numeroParaVer;
			} else {
				return numeroParaVer;
			}
		}


		/** animações **/

		animLoad(){
			
		}

	}

dddTelefone = {
  "estadoPorDdd": {
    "11": "SP",
    "12": "SP",
    "13": "SP",
    "14": "SP",
    "15": "SP",
    "16": "SP",
    "17": "SP",
    "18": "SP",
    "19": "SP",
    "21": "RJ",
    "22": "RJ",
    "24": "RJ",
    "27": "ES",
    "28": "ES",
    "31": "MG",
    "32": "MG",
    "33": "MG",
    "34": "MG",
    "35": "MG",
    "37": "MG",
    "38": "MG",
    "41": "PR",
    "42": "PR",
    "43": "PR",
    "44": "PR",
    "45": "PR",
    "46": "PR",
    "47": "SC",
    "48": "SC",
    "49": "SC",
    "51": "RS",
    "53": "RS",
    "54": "RS",
    "55": "RS",
    "61": "DF",
    "62": "GO",
    "63": "TO",
    "64": "GO",
    "65": "MT",
    "66": "MT",
    "67": "MS",
    "68": "AC",
    "69": "RO",
    "71": "BA",
    "73": "BA",
    "74": "BA",
    "75": "BA",
    "77": "BA",
    "79": "SE",
    "81": "PE",
    "82": "AL",
    "83": "PB",
    "84": "RN",
    "85": "CE",
    "86": "PI",
    "87": "PE",
    "88": "CE",
    "89": "PI",
    "91": "PA",
    "92": "AM",
    "93": "PA",
    "94": "PA",
    "95": "RR",
    "96": "AP",
    "97": "AM",
    "98": "MA",
    "99": "MA"
  },

  "dddsPorEstado": {
    "AC": ["68"],
    "AL": ["82"],
    "AM": ["92", "97"],
    "AP": ["96"],
    "BA": ["71", "73", "74", "75", "77"],
    "CE": ["85", "88"],
    "DF": ["61"],
    "ES": ["27", "28"],
    "GO": ["62", "64"],
    "MA": ["98", "99"],
    "MG": ["31", "32", "33", "34", "35", "37", "38"],
    "MS": ["67"],
    "MT": ["65", "66"],
    "PA": ["91", "93", "94"],
    "PB": ["83"],
    "PE": ["81", "87"],
    "PI": ["86", "89"],
    "PR": ["41", "42", "43", "44", "45", "46"],
    "RJ": ["21", "22", "24"],
    "RN": ["84"],
    "RO": ["69"],
    "RR": ["95"],
    "RS": ["51", "53", "54", "55"],
    "SC": ["47", "48", "49"],
    "SE": ["79"],
    "SP": ["11", "12", "13", "14", "15", "16", "17", "18", "19"],
    "TO": ["63"]
  }
}
