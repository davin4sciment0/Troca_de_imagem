function trocar(){
	let imagem = document.getElementById("imagens")
	let trocar = Math.trunc(Math.random()*10)
	imagem.src = "img/" + trocar+ ".jpg"
}