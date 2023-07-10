var butaodados = document.getElementById('butao_enviar_dados')
var tamanhosenha = document.getElementById('input_tamanho_senha')
var mostrar_senha = document.getElementById('printar_senha')
var divresposta = document.getElementById('divresposta');


function butaochamado() {
    var url = 'https://geradordesenhasapi.ericgomess.repl.co'

    if (tamanhosenha.value > 50) {
        tamanhosenha.value = 50
    }

var dado = {
    tamanhosenha: tamanhosenha.value
}

fetch(url, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(dado)
}).then(response => response.json())
.then(dado => {
    console.log(dado)
    mostrar_senha.innerText = dado
    console.log(dado.length)
    divresposta.style.width = dado.length * 20 + 'px';

})
};


//CODIGO DA API ABAIXO


//from flask import Flask, request, jsonify
//import pandas as pd
//import random
//from flask_cors import CORS

//app = Flask(__name__)
//CORS(app)

//caracteres_senha = [
  //'!', '@', '#', '$', '%', '&', '*', '-', '_', '+', '0', '1', '2', '3', '4',
  //'5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  //'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
  //'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
  //'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
//]


//@app.route('/', methods=['POST'])
//def fazersenha():
  //listanumeroale = []
  //data = request.get_json()
  //tamanhosenha = int(data['tamanhosenha'])
  //for i in range(tamanhosenha):
    //numeroale = random.randint(0, len(caracteres_senha))
    //listanumeroale.append(caracteres_senha[numeroale])
    //listalimpa = ''.join(listanumeroale)
  //return jsonify(listalimpa)


//app.run(host='0.0.0.0')
