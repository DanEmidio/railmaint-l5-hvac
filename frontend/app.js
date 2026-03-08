document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("formManutencao")

if(form){

form.addEventListener("submit", function(e){

e.preventDefault()

let registro = {

trem: document.getElementById("trem").value,
carro: document.getElementById("carro").value,
equipamento: document.getElementById("equipamento").value,
tipo: document.getElementById("tipo").value,
tecnico: document.getElementById("tecnico").value

}

let historico = JSON.parse(localStorage.getItem("manutencoes")) || []

historico.push(registro)

localStorage.setItem("manutencoes", JSON.stringify(historico))

alert("Manutenção registrada")

})

}

let tabela = document.getElementById("tabelaHistorico")

if(tabela){

let historico = JSON.parse(localStorage.getItem("manutencoes")) || []

historico.forEach(reg => {

let linha = `<tr>

<td>${reg.trem}</td>
<td>${reg.carro}</td>
<td>${reg.equipamento}</td>
<td>${reg.tipo}</td>
<td>${reg.tecnico}</td>

</tr>`

tabela.innerHTML += linha

})

}

})
