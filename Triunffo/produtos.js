/** produtos.js **/
/** usar "variável".toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) **/

{
	estoqueGeral = [{
		"tipo":"BRAZUCA",
		"descricao":"",
		"valor":"40,00",
		"disponibilidade": true,
		"foto":["imagens/brazucaFront.png", "imagens/logos/brazuca.png"],
		"cores":[ "#fffc00", "#19b040", "verde", "branco", "preto" ]
	},{
		"tipo":"MUNDI",
		"descricao":"",
		"valor":"30,00",
		"disponibilidade": true,
		"foto":[
            "imagens/mundiFront.png",
            "imagens/logos/mundi.png"
		],
		"cores":[ "rgb(191 235 230)", "#bfebe6", "verde", "branco", "preto" ]
	},{
		"tipo":"HOUSE",
		"descricao":"",
		"valor":"45,00",
		"disponibilidade": true,
		"foto":["imagens/houseFront.png",
			"imagens/logos/house.png"
		],
		"cores":[ "#fff", "#0ac9fe", "verde", "branco", "preto" ]
	}],
    destaqueBanner = [
        {
            "idItemEstoque": estoqueGeral[0],
            "imgBanner":"imagens/brazucaBack.png",
            "textoApresentacao": ""
        },
        {
            "idItemEstoque": estoqueGeral[1],
            "imgBanner":"imagens/mundiBack.png",
            "textoApresentacao": ""
        },
        {
            "idItemEstoque": estoqueGeral[2],
            "imgBanner":"imagens/houseBack.png",
            "textoApresentacao": ""
        }
    ]
}
