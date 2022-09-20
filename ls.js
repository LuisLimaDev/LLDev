// ls.js

ls = {
	raw: function(){ return window.localStorage},
	get: function( item ){ return this.raw().getItem( item ) },
	set: function( item, stringItem ){ this.raw().setItem( item , stringItem ) },
	getJSON: function( item ){ return eval(`[` + this.get( item ) + `]`)[0] },
	setJSON: function( item, jsonOnj ){ this.set( item , JSON.stringify(jsonOnj) ) },
	addJSON: function( item, jsonOnj ){
		if( this.ab == "" ){
			this.ab = "[ " + JSON.stringify( jsonOnj ) + "]";
		} else{
			this.ab = "[ " + this.ab.slice(2, (ls.ab.length)-1) +", " + JSON.stringify( jsonOnj ) + "]";
		}
		this.set( item, this.ab )
	},
	busca: function( coluna, itemBusca, tabela ){
		res = [];
		for( i=0; i<this.getJSON(tabela).length; i++){
			if( this.getJSON(tabela)[i][coluna] == itemBusca ){
				res.push( this.getJSON(tabela)[i] )
			}
		}
		return res
	},
	aa: function( entrada ){
		if( this.ab == "" ){
			this.ab = "[ " + JSON.stringify( entrada ) + "]";
		} else{
			this.ab = "[ " + this.ab.slice(2, (ls.ab.length)-1) +", " + JSON.stringify( entrada ) + "]";
		}
		
	},
	ab: "",
	help: function(){
		console.log('addJSON: ƒ ( item, jsonOnj ) || ADICIONA OBJETOS JSON');
		console.log('busca: ƒ ( coluna, itemBusca, tabela ) || BUSCA QUANDO EXISTE UMA ESTRUTURA JSON ARMAZENADA');
		console.log('get: ƒ ( item ) || RETORNA A STRING DE UM ITEM ARMAZENADO');
		console.log('getJSON: ƒ ( item ) || RETORNA UM JSON QUANDO EXISTE');
		console.log('raw: ƒ () || TODO CONTEUDO ARMAZENADO');
		console.log('set: ƒ ( item, stringItem ) || ARMAZENA STRINGS SIMPLES');
		console.log('setJSON: ƒ ( item, jsonOnj ) || CRIA UM REGISTRO EM JSON');
	}
}
