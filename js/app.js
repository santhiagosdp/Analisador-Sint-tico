function analisadorLexicof(){  // testar se aparece na tela
	document.getElementById('result').innerHTML = "teste";
}


const OPERADOR = ['+', '-', '/', '*'];
const INCOGNITA = ["x", "y"];
const TIPO_OPERADOR = 'OPERADOR';
const TIPO_NUMERO = 'NUMERO';
const TIPO_INCOGNITA = 'INCOGNITA';
function analisadorLexico(){
		var entrada = document.getElementById('codigo').value;
    var array_tokens = entrada.split(" ");
    var tipo_token = '-';
    var posicao_token = 0;
		var lista_tokens = [];
		var imprime="<table class='table table-bordered'><tr><th>Token</th><th>identificador</th><th>posicao</th></tr>";
    for(token of array_tokens){
        if(eh_incognita(token)){
            tipo_token = TIPO_INCOGNITA;
        }
        else if(eh_operador(token)){
            tipo_token = TIPO_OPERADOR;
        }
				else if(eh_numero(token)){
            tipo_token = TIPO_NUMERO;
        }
				else{
            tipo_token = "Terminal";
        }
				imprime+="<tr><td>"+token+"</td><td>"+tipo_token+"</td><td>"+posicao_token+"</td></tr>"
				posicao_token +=1;
    }
    document.getElementById('result').innerHTML = imprime;
}
function eh_operador(token) {
    return OPERADOR.includes(token);
}
function eh_incognita(token){
    return INCOGNITA.includes(token);
}
function eh_numero(token) {
    var n = parseInt(token);
    return Number.isInteger(n);
}
