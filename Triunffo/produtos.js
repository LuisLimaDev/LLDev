/** produtos.js **/
/** usar "variável".toLocaleString("pt-BR", { style: "currency" , currency:"BRL"}) **/

{
	estoqueGeral = [{
		"tipo":"BRAZUCA",
		"descricao":"",
		"valor":"40,00",
		"disponibilidade": true,
		"foto":["imagens/brazucaFront.png", "imagens/logos/brazuca.png"],
        "camisetas": ["catalogo/brazuca/brazuca1.png", "catalogo/brazuca/brazuca2.png", "catalogo/brazuca/brazuca3.png", "catalogo/brazuca/brazuca4.png", "catalogo/brazuca/brazuca5.png", "catalogo/brazuca/brazuca6.png", "catalogo/brazuca/brazuca7.png", "catalogo/brazuca/brazuca8.png", "catalogo/brazuca/brazuca9.png"],
		"cores":[ "#fffc00", "#19b040", "verde", "amarelo"]
	},{
		"tipo":"MUNDI",
		"descricao":"",
		"valor":"30,00",
		"disponibilidade": true,
		"foto":[
            "imagens/mundiFront.png",
            "imagens/logos/mundi.png"
		],
        "camisetas":[
            "catalogo/mundi/mundi01.png",
            "catalogo/mundi/mundi02.png",
            "catalogo/mundi/mundi03.png",
            "catalogo/mundi/mundi04.png",
            "catalogo/mundi/mundi05.png",
            "catalogo/mundi/mundi06.png",
            "catalogo/mundi/mundi07.png",
            "catalogo/mundi/mundi08.png",
            "catalogo/mundi/mundi09.png",
            "catalogo/mundi/mundi10.png",
            "catalogo/mundi/mundi12.png",
            "catalogo/mundi/mundi13.png",
            "catalogo/mundi/mundi14.png",
            "catalogo/mundi/mundi15.png",
            "catalogo/mundi/mundi16.png",
            "catalogo/mundi/mundi17.png",
            "catalogo/mundi/mundi18.png",
            "catalogo/mundi/mundi19.png",
            "catalogo/mundi/mundi20.png",
            "catalogo/mundi/mundi21.png",
            "catalogo/mundi/mundi22.png"
                    ],
		"cores":[ "rgb(191 235 230)", "#0000e6", "verde", "branco", "preto" ]
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
            "textoApresentacao": "CADA GRAMADO <br>UMA <br>HISTÓRIA"
        },
        {
            "idItemEstoque": estoqueGeral[1],
            "imgBanner":"imagens/mundiBack.png",
            "textoApresentacao": "MANTOS <br>SAGRADOS <br>INTERNACIONAIS."
        },
        {
            "idItemEstoque": estoqueGeral[2],
            "imgBanner":"imagens/houseBack.png",
            "textoApresentacao": "LINHA DOS<br>DONOS DA <br>CASA"
        }
    ]
}
