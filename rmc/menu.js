/********************/
/****** menu.js *****/
/** MENU PRINCIPAL **/
/********************/

// logoRMC = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="40px" width="190px"> <style type="text/css"> text.st1 { transform: translate(1px, 20px); fill: white; font-family: sans-serif; } text.st1.st3 {transform: translate(1px, 40px);}.st2{font-size:12px;}.st3{font-size:24px;}</style><g id="letreiro"><text transform="matrix(1 0 0 1 361.7299 246.0184)" class="st1 st2">Central de </text><text transform="matrix(1 0 0 1 361.7299 264.9745)" class="st1 st3">notícias RMC</text></g></svg>';

// logo Original by Nakai
// https://raw.githubusercontent.com/LuisLimaDev/LLDev/gh-pages/logoRMC_original.svg

var logoRMC = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="42px" width="190px"> <style type="text/css"> .cls-1{font-size:137.27px; font-weight: 600} .cls-1,.cls-2,.cls-3,.cls-4,.cls-5{ fill:' + corPadrao1 + ';} .cls-1,.cls-3{font-family:ArialMT, Arial;} .cls-2,.cls-4{font-family:Impact, Impact;} .cls-2,.cls-3,.cls-4{font-size:84.94px;} </style> <g id="Layer_1-2" data-name="Layer 1" transform="translate(0 0) scale(0.18 0.18)"> <text class="cls-4" transform="translate(4.59 76.05) scale(1.12 1)">Central </text> <text class="cls-3" transform="translate(4 144.05) scale(0.95 1)">De</text> <text class="cls-2" transform="translate(4.59 227.31) scale(1.08 1)">Notícias</text> <g xmlns="http://www.w3.org/2000/svg" transform="translate(320 -480) scale(2.1)"> <text class="cls-1" transform="translate(0 331.04) scale(1.12 1)">RMC</text> <circle class="cls-5" cx="296" cy="282" r="23"/> </g> <path class="cls-5" d="M22,87.81c-14.23,7.33-12.77,48.36,0,54.33C30.37,146,47.61,136.76,53.61,123h43V105H54.13C48.76,91.22,31.15,83.07,22,87.81Z"/> </g> </svg>';
var erro404 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="42px" width="190px"> <style type="text/css"> .cls-1{font-size:137.27px; font-weight: 600} .cls-1,.cls-2,.cls-3,.cls-4,.cls-5{ fill:' + corPadrao1 + ';} .cls-1,.cls-3{font-family:ArialMT, Arial;} .cls-2,.cls-4{font-family:Impact, Impact;} .cls-2,.cls-3,.cls-4{font-size:84.94px;} </style> <g id="Layer_1-2" data-name="Layer 1" transform="translate(0 0) scale(0.18 0.18)"> <text class="cls-4" transform="translate(4.59 76.05) scale(1.12 1)">Algo </text> <text class="cls-3" transform="translate(4 144.05) scale(0.95 1)">Saiu</text> <text class="cls-2" transform="translate(4.59 227.31) scale(1.08 1)">Errado</text> <g xmlns="http://www.w3.org/2000/svg" transform="translate(320 -480) scale(2.1)"> <text class="cls-1" transform="translate(0 331.04) scale(1.12 1)">404</text> <circle class="cls-5" cx="296" cy="282" r="23"/> </g> <path class="cls-5" d="M22,87.81c-14.23,7.33-12.77,48.36,0,54.33C30.37,146,47.61,136.76,53.61,123h43V105H54.13C48.76,91.22,31.15,83.07,22,87.81Z"/> </g> </svg>';

localizacao = window.location.href;
if( localizacao.split("materia/") != null ){
	inicio = "../";
} else {
	inicio = "./";
}

menuPrincipal=()=>{
	menuNav = novoElm("nav");
	btMenu = el.novoLink("&#9776;", "#menuBlock");
	menuBlock = el.novaDiv( "" );
	btFechar = el.novoLink("&times;", "#fechar");
	btFechar.id = "btFechar";
	primeiraLinha = el.novaDiv( el.novoLink("Inicio", inicio).outerHTML + btFechar.outerHTML );
	primeiraLinha.setAttribute( "class", "primeiraLinha");
	menuBlock.append( primeiraLinha );
	menuBlock.append( el.novoLink("Cidades", "#cidades") );
	menuBlock.append( el.novoLink("Eventos", "#eventos") );
	menuBlock.append( el.novoLink("Vídeos", "#videos") );
	menuBlock.append( el.novoLink("Colunistas", "#colunistas") );
	menuBlock.append( el.novoLink("Editorial", "#editorial") );
	menuBlock.id = "menuBlock";
	menuBlock.setAttribute("class", "escondido");
	menuNav.append( el.novaDiv( el.novoLink( el.novaImagem( "data:image/svg+xml;utf8," + logoRMC, "Logo" ).outerHTML , inicio).outerHTML ) );
	menuNav.append( el.novaDiv( el.novoLink("Pesquisar","#pesquisar").outerHTML ) );
	menuNav.append( el.novaDiv( btMenu.outerHTML ) );
	menuNav.append( menuBlock );
	getById("tagHeader").append( menuNav);
}