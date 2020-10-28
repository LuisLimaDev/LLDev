/** produtos.js **/
/** usar "variável".toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) **/

{
	estoqueGeral = [{
		"tipo":"Camiseta",
		"descricao":"Algodão",
		"valor":"40,00",
		"disponibilidade": true,
		"foto":["https://somarmalhas.com.br/site/wp-content/uploads/2018/03/camiseta-branca-510x510.jpg"],
		"cores":[ "azul", "vermelho", "verde", "branco", "preto" ]
	},{
		"tipo":"Shorts",
		"descricao":"Tactel",
		"valor":"30,00",
		"disponibilidade": true,
		"foto":[
            "https://blog.keydesign.com.br/wp-content/uploads/2017/10/Moda-Praia-Masculina-7.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP5K1BL-1fmbQhZj17Nv9amqU4wC5kIs1elubP2bRpCvE230D8mUU_gVlwA6Rg8kWAwxezKNx72Q&usqp=CAc"
		],
		"cores":[ "azul", "vermelho", "verde", "branco", "preto" ]
	},{
		"tipo":"Calças",
		"descricao":"Moletom",
		"valor":"45,00",
		"disponibilidade": true,
		"foto":["https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB6fBJX12cvbzzP7m6AjZZtiTnxEsTlqcCI709MulnKdlRTPR_nFoxITdz6LSssCJVhaeZzmcQ&usqp=CAc",
			"https://static.netshoes.com.br/produtos/calca-moletom-confort-mama-latina-feminina/88/AU9-0091-188/AU9-0091-188_zoom1.jpg?ts=1565627075"
		],
		"cores":[ "azul", "vermelho", "verde", "branco", "preto" ]
	},{
		"tipo":"Agasalhos",
		"descricao":"Moletom",
		"valor":"65,00",
		"disponibilidade": true,
		"foto":["https://i.pinimg.com/564x/03/6f/92/036f9207b48970631180c8e2681f26d8.jpg",
			"https://static.netshoes.com.br/produtos/calca-moletom-confort-mama-latina-feminina/88/AU9-0091-188/AU9-0091-188_zoom1.jpg?ts=1565627075"
		],
		"cores":[ "azul", "vermelho", "verde", "branco", "preto" ]
	},{
		"tipo":"Camisetas",
		"descricao":"Algodão",
		"valor":"35,00",
		"disponibilidade": true,
		"foto":[
            "https://i.pinimg.com/564x/57/66/a4/5766a4ab63c2171b39852166a8899a79.jpg",
			"https://i.pinimg.com/236x/2d/e3/34/2de334ea5643b367f4ccbd3d467b6ce5.jpg"
		],
		"cores":[ "azul", "vermelho", "verde", "branco", "preto" ]
	}],
    destaqueBanner = [
        {
            "idItemEstoque": estoqueGeral[4],
            "imgBanner":"https://image.freepik.com/fotos-gratis/mulher-morena-elegante-jovem-posando-no-cafe-da-moda-da-cidade-roupa-casual-e-oculos-escuros_291049-1231.jpg",
            "textoApresentacao": "Sua melhor opção em moda sem precisar sair de casa."
        },
        {
            "idItemEstoque": estoqueGeral[1],
            "imgBanner":"https://images.freeimages.com/images/premium/previews/3342/33424806-man-standing-on-a-caribbean-beach.jpg",
            "textoApresentacao": "Bermudas para o verão, vários tamanhos e cores."
        },
        {
            "idItemEstoque": estoqueGeral[3],
            "imgBanner":"https://www.dicasdemulher.com.br/wp-content/uploads/2019/04/estilo-swag-00.jpg",
            "textoApresentacao": "Agasalhos de moletom com várias opções de estilo."
        }
    ]
}
