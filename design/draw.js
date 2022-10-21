draw = {
	help: `Essa é uma classe de simples aplicação em desenvolvimento desde 01/09/2022 para criação dinâmica de vetores SVG. Para usa-la, configure as propriedades em 'ativarDraw()' no final do script e os gatilhos 'onmousedown="iniciaHold( event )" onmouseup="finalHold( event )"' na área de desenho do HTML.`,
	getOutput: document.body,
	setOutput: function( idObjetoHTML, eventos ){
		draw.getOutput = idObjetoHTML;
		// getById( idObjetoHTML ).setAttribute("onmousedown", iniciaHold( eventos ) );
		// getById( idObjetoHTML ).setAttribute("onmouseup", finalHold( eventos ) );
	},
	pontos: new Array(),
	itens: 0,
	desenhoAtivado: false,
	tipo: null,
	checkDraw: function( evento ){
		if( draw.desenhoAtivado === true ){
			
			draw.getOutput.append( draw.svg( 'drawer', draw[ draw.tipo ]( ((evento.clientX - draw.getOutput.offsetLeft) - (draw.pontos[draw.pontos.length-1][0]) ) , ((evento.clientY - draw.getOutput.offsetTop) - (draw.pontos[draw.pontos.length-1][1]) ) , 20, "","fill: rgb("+ Math.round( Math.random() * 255 ) +" "+ Math.round( Math.random() * 255 ) +" "+ Math.round( Math.random() * 255 ) +")")  ) );
		}
	},
	nSVG : new ElementosSVG,
	svg: function( idSVG, conteudo ){
		if( !(getById( idSVG )) == true ){
			svg = draw.nSVG.novoSVG("");
			svg.id = idSVG;
			svg.setAttribute("height", draw.getOutput.offsetHeight);
			svg.setAttribute("width", draw.getOutput.offsetWidth);
		} else {
			svg = getById( idSVG );
		}
		svg.innerHTML = svg.innerHTML + conteudo;
		return svg
	},
	Path: function(){
		return "<path class='item"+ draw.itens++ +"' style='stroke: black' d='"+ linha +"'/>"
	},
	Circle: function( distanciaX, distanciaY, tamanhoDoRadio, identificacao, estilosDoCirculoCSS ){
		return '<circle class="item'+ draw.itens++ +'" id="' + identificacao + '" cx="' + distanciaX + '" cy="' + distanciaY + '" r="' + tamanhoDoRadio + '" style="' + estilosDoCirculoCSS + '" />'
	},
	Text: function(){
		return "<text class='item"+ draw.itens++ +"' style='transform: translate( "+ draw.pontos[ draw.pontos.length - 2 ][0] +"px, "+ draw.pontos[ draw.pontos.length - 2 ][1] +"px); fill: rgb(0 0 0)'>Texto</text>";
	},
	go:function(){
		nada=draw.svg( draw.Path(draw.pontos) );
		draw.getOutput.append(nada);
		nada.setAttribute("height", draw.getOutput.offsetHeight);
		nada.setAttribute("width", draw.getOutput.offsetWidth);
	}
}

iniciaHold=( evt )=>{
	console.log();
		linha = " m " + ((evt.clientX - draw.getOutput.offsetLeft) )+", "+((evt.clientY - draw.getOutput.offsetTop)) + ", ";
	// if( draw.pontos.length === 0 ){
		draw.pontos.push([ ((evt.clientX - draw.getOutput.offsetLeft) ) , ((evt.clientY - draw.getOutput.offsetTop)) ]);
	// } else {
		// draw.pontos.push([ ((evt.clientX - draw.getOutput.offsetLeft) - ( draw.pontos[draw.pontos.length-1][0] ) ), ((evt.clientY - draw.getOutput.offsetTop) - (draw.pontos[draw.pontos.length-1][1]) ) ]);
	// }
	segurando = "segurando";
	listarAttrs( evt.target );
}

finalHold=( evt )=>{
	segurando = "solto";
	draw.pontos.push( [ ((evt.clientX - draw.getOutput.offsetLeft) - (draw.pontos[draw.pontos.length-1][0]) ) , ( ( evt.clientY - draw.getOutput.offsetTop) - (draw.pontos[draw.pontos.length-1][1]) ) ]);
	linha = linha+ draw.pontos[draw.pontos.length-1][0] +", "+ draw.pontos[draw.pontos.length-1][1] + "z ";
	// draw.getOutput.append( draw.Circle( (( evt.clientX - draw.getOutput.offsetLeft) - (draw.pontos[draw.pontos.length-1][0]) ) , ((evt.clientY - draw.getOutput.offsetTop) - (draw.pontos[draw.pontos.length-1][1]) ) , 20, "","fill: rgb("+ Math.round( Math.random() * 255 ) +" "+ Math.round( Math.random() * 255 ) +" "+ Math.round( Math.random() * 255 ) +")") );
	draw.checkDraw( evt );
}

ativarDraw=()=>{
	if( draw.desenhoAtivado == false ){
		draw.desenhoAtivado=true;
		if( draw.tipo == null ){ draw.tipo="Circle" }
	} else {
		draw.desenhoAtivado = false;
	}
	/**********************************/
	/** ADICIONAR BOTÕES INDIVIDUAIS **/
	/**********************************/
	// draw.desenhoAtivado=true;
	draw.setOutput( getById("saida") );
}