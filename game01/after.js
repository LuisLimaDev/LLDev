//after.js

	var itemAleatorio, controles, contador=true, pntTempo=0; qntAnjos = 0; movimento = 20;  fase = 1; primeiraVez = true; jogoTipo = "carreira";

	let iPosX = {};
	let iPosY = {};

	let el = new Elementos;
	let nSVG = new ElementosSVG;
	let mTempo = new llTempo;

	let persona = [
		{
			tipo:"monstro",
			cor: "stroke: rgb(255,0,0); filter: drop-shadow( 0 2px 3px rgb(0,0,0))",
			formato: '<g class="persona monstro" style="transform: translate(-80px, -80px) "><defs><style>.monstro1{fill:red;stroke:#aa1e23;stroke-miterlimit:10;stroke-width:10px;fill-rule:evenodd;}</style></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="monster" class="monstro1" d="M126.07,57.1a58.61,58.61,0,0,0,7.25-47.72l-3.9-.15A58.63,58.63,0,0,1,92.94,39.56a71.87,71.87,0,0,0-31.88,0A58.64,58.64,0,0,1,22.74,5.16l-.69,0a58.59,58.59,0,0,0,5.88,52,72,72,0,1,0,98.14,0Z"/></g></g></g>'
		},
		{
			tipo:"anjo",
			cor: "stroke: rgb(255,255,255); filter: drop-shadow( 0 2px 3px rgb(255,255,255))",
			formato: '<g class="persona anjo" style="transform: translate(-80px, -80px) "><defs><style>.anjo1,.anjo2,.anjo4{fill:#ffc;}.anjo1{stroke:#ffc;stroke-width:12px;}.anjo1,.anjo2,.anjo3,.anjo4{stroke-linecap:round;stroke-linejoin:round;}.anjo1,.anjo2{fill-rule:evenodd;}.anjo2,.anjo4{stroke:#fc0;stroke-width:10px;}.anjo3{fill:none;stroke:#fff;stroke-width:11px;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><path class="anjo1" d="M16.5,69.2a70.32,70.32,0,0,1,140,.8"></path><path class="anjo2" d="M28.81,71a58,58,0,0,1,115.45.67"></path><ellipse class="anjo3" cx="86.5" cy="131.5" rx="81" ry="81.5"></ellipse><circle class="anjo4" cx="86.5" cy="132" r="72"></circle></g></g>'
		},
		{
			tipo:"bonus",
			cor: "stroke: rgb(0,255,0); filter: drop-shadow( 0 2px 3px rgb(0,255,0))",
			formato: '<g class="persona bonus" style="transform: translate(-80px, -80px) "><defs><style>.bonus-1{fill:#0c6;stroke:#099;stroke-linecap:square;stroke-miterlimit:10;stroke-width:12px;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="bonus-1" x="64.01" y="72.04" width="85.99" height="127.96"></rect><rect class="bonus-1" x="6" y="6" width="85.99" height="127.96"></rect></g></g></g>'
		}
	];

	criarIdJogador =()=> mTempo.tagDataAtualizada() + mTempo.tagHoraAtualizada();

	var dadosSeparados = [];
	var posBolhas = [];

/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
/************************************ TROCAR JANELA ***********************************/
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/

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

/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
/********************************* ESCOLHER FASES *************************************/
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/

	fasesJogadas = function( proximaFase ){
		getById("listaFases").innerHTML = "";
		cntFase = 1;
		while( proximaFase > cntFase ){
			outraFase = el.novoLink( "Fase " + cntFase, "javascript:jogarEscolha( " + cntFase + " )" );
			getById("listaFases").append( outraFase );
			cntFase++;
		}
		ultimaLiberada = el.novoLink( "Fase " + cntFase, "javascript:ultimaLiberada( " + cntFase + " )" );
		getById("listaFases").append( ultimaLiberada );
	}

	jogarEscolha = function( faseEscolhida ){
		jogoTipo = "freePlay";
		tirarJanela( getById("fases") );
		bolhas( getById('itemSaida'), faseEscolhida )
	}

	ultimaLiberada = function( faseEscolhida ){
		jogoTipo = "carreira";
		tirarJanela( getById("fases") );
		bolhas( getById('itemSaida'), faseEscolhida )
	}

/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
/********************************* CONFIGURAÇÃO DE TELA *******************************/
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/

	function toggleFullScreen() {
		if (!document.fullscreenElement &&    // alternative standard method
		!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
			if (document.documentElement.requestFullscreen) {
				document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
				document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
				document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
			info = "Sair da ";
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			info = "Entrar em ";
		}
		getById("modoTela").innerText = info;
	}

	escalarTela = function() {
		if( ( screen.width < screen.height ) == false ){
			escalaDeTamanho = window.innerWidth / iPosX.max;
		} else {
			escalaDeTamanho = window.innerHeight / iPosY.max;
		}
		getById("telaSaida").style.transform = "translate(-50%, -50%) scale(" + ( escalaDeTamanho /1.1) + ")";
	}

	escalaDeTamanho=1;
	ajustarTela = function(){
		if( escalaDeTamanho != 1 ){
			desescalarTela()
		} else {
			escalarTela();
		}
	}

	ajustarAltJanelas = function( tamanhoRecebido ){
		janelas = getByClass("botoes");
		todasJan = 0;
		while( janelas.length > todasJan ){
			getByClass("botoes")[ todasJan ].style.height = tamanhoRecebido + "px";
			todasJan++;
		}
	}

	ajustarLargJanelas = function( tamanhoRecebido ){
		janelas = getByClass("botoes");
		todasJan = 0;
		while( janelas.length > todasJan ){
			getByClass("botoes")[ todasJan ].style.width = tamanhoRecebido + "px";
			todasJan++;
		}
	}

	desescalarTela = function() { escalaDeTamanho=1; getById("telaSaida").style.transform = "translate(-50%, -50%) scale(1)"; }

/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
/********************************* CARREGAR CONFIGURAÇÕES *****************************/
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/

	aplicarConfigs = function( dadosConfig ){
		svgBotoes=getById("svgBotoes").innerHTML;
		getById("svgBotoes").outerHTML="";
		configSeparadas = dadosConfig.split(" ::: ");
		idDoJogador = configSeparadas[0];
		largTela = configSeparadas[1].split(',')[0];
		getById("telaSaida").style.width = largTela + "px";
		altTela = configSeparadas[1].split(',')[1];
		iPosX = {"min": ( movimento / 2 ),"max": (largTela - ( movimento / 2 ))};
		iPosY = {"min": ( movimento / 2 ),"max": ( altTela - ( movimento / 2 ))};
		posicaoX = ( largTela/ 2 );
		posicaoY = ( altTela / 2 );
		ajustarAltJanelas( altTela - 40 );
		ajustarLargJanelas( largTela - 40 );
		
		controles = configSeparadas[2];
		// fasesJogadas();
	}

	verificarDados = function() {
		if( !( window.localStorage.getItem('dados') ) == false ){
			dadosSalvos = localStorage.getItem('dados');
		} else {
			dadosSalvos = criarIdJogador() + ' ::: 800,440 ::: tecladoCompleto ;;; faseAtual:1 ;;; placar: 1000 === 1 :::  ;;; ';
			localStorage.setItem('dados', dadosSalvos );
			localStorage.getItem('dados');
		}
		return dadosSalvos;
	}

	organizarDados = function( dadosPraOrganizar ){
		dadosSeparados = dadosPraOrganizar.split(" ;;; ");
		aplicarConfigs( dadosSeparados[0] );
		fase = parseInt( dadosSeparados[1].slice('faseAtual:'.length) );
		fasesJogadas( fase );
		getById("faseAtual").innerText = "fase " + fase;
		getById("btInicia").setAttribute("onclick", "fasesJogadas(" + fase + ")");
	}

	carregaControles = function(){
		// getById("tipoDeControle").innerText = controleEscolhido;
		pai.innerHTML = pai.innerHTML + svgBotoes;
	}

	gatilhosDeControle = function( tipoDeControle ){
		window.document.removeEventListener("keydown",null,null);
		if( tipoDeControle === "tecladoCompleto" ){
			//ADICIONA EVENTLISTENERS NAS TECLAS DIRECIONAIS
			

			window.document.addEventListener("keydown", function(evento){
				//itemAleatorio = evento;
				if( contador == true && qntAnjos > 0 ){
					if( evento.code === "ArrowLeft" && posicaoX > iPosX.min ||  evento.code === "KeyA" && posicaoX > iPosX.min ){
						posicaoX = posicaoX - movimento;
						atualizaPos();
						getById( "moviItem" ).setAttribute("points", "0,10, 10,0, 0,10, 20,10, 0,10, 10,20");

					} else if( evento.code === "ArrowRight" && posicaoX < iPosX.max || evento.code === "KeyD" && posicaoX < iPosX.max ){
						posicaoX = posicaoX + movimento;
						atualizaPos();
						getById( "moviItem" ).setAttribute("points", "20,10, 10,0, 20,10, 0,10, 20,10, 10,20");

					} else if( evento.code === "ArrowUp" && posicaoY > iPosY.min || evento.code === "KeyW" && posicaoY > iPosY.min ){
						posicaoY = posicaoY - movimento;
						atualizaPos();
						getById( "moviItem" ).setAttribute("points", "10 0 10 20 10 0 0 10 10 0 20 10");

					} else if( evento.code === "ArrowDown" && posicaoY < iPosY.max || evento.code === "KeyS" && posicaoY < iPosY.max ){
						posicaoY = posicaoY + movimento;
						atualizaPos();
						getById( "moviItem" ).setAttribute("points", "10 0 10 20 0 10 10 20 20 10 10 20");
					}
					//getById("lerComandos").innerText = evento.code;
				} else {
					fimDeJogo()
				}
			});

		} else if( tipoDeControle === "touch" ){
			//ADICIONA EVENTLISTENERS NA TELA
		}
	}



/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/
/******************************** FUNÇÕES DO JOGO *************************************/
/**************************************************************************************/
/**************************************************************************************/
/**************************************************************************************/


	atualizaPos = function(){
		getById( "objeto" ).style.transform = "translate( " + posicaoX + "px, " + posicaoY + "px)";
		getById("objeto").children[0].style.animation = "";
		verSeMata( posicaoX, posicaoY );
	}

	contarTempo = function() {
		pntTempo = pntTempo + 50;
		if( contador == true ){ var t = setTimeout(function(){ contarTempo() }, 50); }
	}

	verSeMata = function( paramX, paramY ){
		itensVivos = pai.children;
		totalVivos = 0;
		while( itensVivos.length > totalVivos ){
			if( paramX == itensVivos[totalVivos].getAttribute("x") && paramY == itensVivos[totalVivos].getAttribute("y")  ){
				console.log( totalVivos );
				console.log(" bateu com item " + totalVivos );
				if( posBolhas[ itensVivos[totalVivos].id.slice(2) ].persona.tipo == "monstro" ){
					pntTempo = pntTempo + 50000;
					fimDeJogo();
				} else {
					if( posBolhas[ itensVivos[totalVivos].id.slice(2) ].persona.tipo == "anjo" ){
						qntAnjos--;
					} else if( posBolhas[ itensVivos[totalVivos].id.slice(2) ].persona.tipo == "bonus" ){
						pntTempo = pntTempo - 25;
					} else if( posBolhas[ itensVivos[totalVivos].id.slice(2) ].persona.tipo == "anjo" && qntAnjos == 1 ){
						fimDeJogo();
					}
					getById("objeto").children[0].style.animation = "0.3s morreu normal linear";
					itensVivos[totalVivos].outerHTML = setTimeout(function(){ return ''; }, 400);
				}
			}
			totalVivos++;
		}
	}

	fimDeJogo = function(){
		getById("faseAtual").innerText = "fase " + fase;
		getById("btInicia").setAttribute( "onclick", "fasesJogadas()" );
		pontos = ( ( pntTempo + (getById('fundo').children.length * 2) ) / 50 );
		personagem = "";
		window.document.removeEventListener("keydown", null);
		getById('objeto').style.stroke = "red";
		if( contador == true ) {
			msgSaida = "Jogo encerrado!";
			if( qntAnjos == 0 ){
				msgSaida = msgSaida + " Você passou a fase " + fase;
				if( jogoTipo == "carreira" ){
					fase++;
				}
			} else {
				msgSaida = msgSaida + " A fase " + fase + " não foi finalizada";
			}
		}

		contador = false;
		dadosSalvos = dadosSeparados[0] + ' ;;; faseAtual:' + fase + ' ;;; placar: ' + pontos + ' === ' + fase + ' ::: ' + dadosSeparados[2] + ' ;;; ';
		localStorage.setItem('dados', dadosSalvos );
		getById('letreiroSaida').innerHTML = pontos + ' pontos. ' + msgSaida;
		getById('letreiroSaida2').innerHTML = pontos + ' pontos. ' + msgSaida;
		trazerJanela( getByClass("botoes")[0] );
	}

	pausarJogo = function( ){
		contador = false;
		trazerJanela( getByClass("botoes")[0] );
		getById("btInicia").href = "javascript:despausarJogo()";
		pontos = ( ( pntTempo + (getById('fundo').children.length * 2) ) / 50 );
		getById("letreiroSaida").innerHTML = pontos + ' pontos feitos até agora. ';
		getById("letreiroSaida2").innerHTML = pontos + ' pontos feitos até agora. ';
	}

	despausarJogo = function( ){
		contador = true;
		tirarJanela( getByClass("botoes")[0] );
		getById("btInicia").href = "javascript:bolhas( getById('itemSaida') )";
		getById("letreiroSaida").innerHTML = 'Pausa || Fase ' + fase + '';
		contarTempo();
	}

	contarAnjos = function( objRecebido ){
		if( objRecebido.tipo == "anjo" ){qntAnjos++};
		return objRecebido
	}

	criarPersonagem = function( objRecebido ){
		personagem = nSVG.novoGrupo( nSVG.novaPolyforma('moviItem','10 0 10 20 10 0 0 10 10 0 20 10','transform: translate(-10px, -10px); stroke: rgb(100,175,255); filter: drop-shadow( 0 2px 3px rgb(0,0,0))') ,'objeto');
		personagem.style.transform = "translate( " + posicaoX + "px, " + posicaoY + "px)";
		
		return personagem.outerHTML;
	}

	criarMundo = function( objRecebido ){
		mundo = nSVG.novoGrupo( '' ,'mundo');
		letreiro = '<text style="fill: rgb(255,255,255,50%);transform: translate(10px, 20px);" onclick="pausarJogo()" id="letreiroSaida">Pausa || Fase ' + objRecebido + ' </text>';

		mundo.innerHTML = nSVG.linearGradient2CoresA('grade1','rgb(0,150,255)','rgb(255,200,150)') + nSVG.novoRect('fundo',0,0, largTela, altTela, 'fill: url(#grade1)') + letreiro;
		return mundo.outerHTML;
	}

	verlocal = function( paramsXeY ){
		itensCriados = pai.children;
		cntPos = 0;
		pos = [];
		while( itensCriados.length > cntPos ){
			if( paramsXeY[0] == itensCriados[cntPos].getAttribute("x") && paramsXeY[1] == itensCriados[cntPos].getAttribute("y")  ){
				pos = verlocal([(Math.round( Math.random() * calcPosX ) * movimento ), (Math.round( Math.random() * calcPosY ) * movimento )]);
			} else {
				pos = [paramsXeY[0], paramsXeY[1]];
			}
			cntPos++
		}
		return pos;
	}

	testeGrp=[];
	bolhas = function( saidaElement, numeroDaFase ){
		tirarJanela( getByClass("botoes")[0] );
		saidaElement.innerHTML = "";

		pai = nSVG.novoSVG("");
		pai.setAttribute("width", largTela);
		pai.setAttribute("height", altTela);
		pai.style.width = largTela;
		pai.style.height = altTela;
		if( numeroDaFase != null ){
			totalDeItens = (16 + numeroDaFase);
			pai.innerHTML = criarMundo( numeroDaFase )
		} else {
			totalDeItens = (16 + fase);
			pai.innerHTML = criarMundo( fase );
		}
		pai.innerHTML = pai.innerHTML + criarPersonagem();

		qntAnjos = 0;
		contador = true;
		pntTempo = 0;
		inicio = 0;
		calcPosX = ( largTela / 2 ) / 10;
		calcPosY = ( altTela / 2 ) / 10;
		while( inicio < totalDeItens ){
			escolhaPersona = Math.round( Math.random() * 2 );
			coords = verlocal( [(Math.round( Math.random() * calcPosX ) * movimento ), (Math.round( Math.random() * calcPosY ) * movimento )] );
			posBolhas[inicio] =  {
				'identifica': persona[ escolhaPersona ].tipo,
				'x': coords[0],
				'y': coords[1],
				'persona': contarAnjos( persona[ escolhaPersona ] ) 
			};

			testeGrp[inicio] = nSVG.novoGrupo( posBolhas[inicio].persona.formato, 'id'+inicio );
			testeGrp[inicio].style.transform = ' translate(' + posBolhas[ inicio ].x + 'px, ' + posBolhas[ inicio ].y + 'px) scale(0.1)';
			testeGrp[inicio].setAttribute("x", posBolhas[ inicio ].x);
			testeGrp[inicio].setAttribute("y", posBolhas[ inicio ].y);
			pai.innerHTML = pai.innerHTML + testeGrp[inicio].outerHTML;
			inicio = inicio + 1;
		}
		saidaElement.append( pai );
		contarTempo();

		if( primeiraVez === true ){
			carregaControles();
			window.document.addEventListener("keydown", function(evento){
				//itemAleatorio = evento;
				if( contador == true && qntAnjos > 0 ){
					if( evento.code === "ArrowLeft" ){
						moveEsquerda()

					} else if( evento.code === "ArrowRight" ){
						moveDireita()
					} else if( evento.code === "ArrowUp" ){
						moveCima()

					} else if( evento.code === "ArrowDown" ){
						moveBaixo()
					}
					//getById("lerComandos").innerText = evento.code;
				} else {
					fimDeJogo()
				}
			});

			primeiraVez = false

		}
		carregaControles();
		getById('letreiroSaida').addEventListener('click', function(){
			pausarJogo();
		});

	}



	class Mover{
		esquerda = function(){
			posicaoX = posicaoX - movimento;
			atualizaPos();
			getById( "moviItem" ).setAttribute("points", "0,10, 10,0, 0,10, 20,10, 0,10, 10,20");
		}

		direita = function(){
			posicaoX = posicaoX + movimento;
			atualizaPos();
			getById( "moviItem" ).setAttribute("points", "20,10, 10,0, 20,10, 0,10, 20,10, 10,20");

		}

		cima = function(){
			posicaoY = posicaoY - movimento;
			atualizaPos();
			getById( "moviItem" ).setAttribute("points", "10 0 10 20 10 0 0 10 10 0 20 10");
		}

		baixo = function(){
			posicaoY = posicaoY + movimento;
			atualizaPos();
			getById( "moviItem" ).setAttribute("points", "10 0 10 20 0 10 10 20 20 10 10 20");
		}
	}

	moveEsquerda = function(){
		if( contador == true && qntAnjos > 0 ){
			if( posicaoX > iPosX.min ){
				posicaoX = posicaoX - movimento;
				atualizaPos();
				getById( "moviItem" ).setAttribute("points", "0,10, 10,0, 0,10, 20,10, 0,10, 10,20");
			}
		} else {
			fimDeJogo()
		}
	}

	moveDireita = function(){
		if( contador == true && qntAnjos > 0 ){
			if( posicaoX < iPosX.max ){
				posicaoX = posicaoX + movimento;
				atualizaPos();
				getById( "moviItem" ).setAttribute("points", "20,10, 10,0, 20,10, 0,10, 20,10, 10,20");
			}
} else {
			fimDeJogo()
		}
	}

	moveCima = function(){
		if( contador == true && qntAnjos > 0 ){
			if( posicaoY > iPosY.min ){
				posicaoY = posicaoY - movimento;
				atualizaPos();
				getById( "moviItem" ).setAttribute("points", "10 0 10 20 10 0 0 10 10 0 20 10");

			}

		} else {
			fimDeJogo()
		}
	}

	moveBaixo = function(){
		if( contador == true && qntAnjos > 0 ){
			if( posicaoY < iPosY.max ){
				posicaoY = posicaoY + movimento;
				atualizaPos();
				getById( "moviItem" ).setAttribute("points", "10 0 10 20 0 10 10 20 20 10 10 20");
			}
		} else {
			fimDeJogo()
		}
	}

	organizarDados( verificarDados() );


