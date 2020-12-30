/** padrao.js **/

	janela = window;
	larguraTotal = janela.innerWidth;
	alturaTotal = janela.innerHeight;
	corPadrao = "rgb(255 102 0)"; //

	paddingCentroAltura = "";
	paddingCentroLargura = "";
	marginCentroAltura = "";
	
	let root = document.documentElement;
    root.style.setProperty('--alturaTotal', alturaTotal - 80 + "px");
    root.style.setProperty('--larguraTotal', larguraTotal + "px");

	root.addEventListener("mousemove", e => {
		root.style.setProperty('--mouse-x', e.clientX + "px");
		root.style.setProperty('--mouse-x-cent', "-" + Math.round( ( e.clientX / 100 ) * 10 ) + "%");
		root.style.setProperty('--mouse-y', e.clientY + "px");
		root.style.setProperty('--mouse-y-cent', "-" + Math.round( (e.clientY /100) * 15 ) + "%");

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