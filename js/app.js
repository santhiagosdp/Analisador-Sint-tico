function analisadorLexicof(){  // testar se aparece na tela
	document.getElementById('result').innerHTML = "teste";
}


const OPERADOR = ['+', '-', '/', '*'];
const INCOGNITA = ["x", "y", "X", "Y"];
const TIPO_OPERADOR = 'OPERADOR';
const TIPO_NUMERO = 'NUMERO';
const TIPO_INCOGNITA = 'INCOGNITA';
 function analisadorLexico(){   /*CLICAR NO BOTÃO ANALIZAR, FAÇA */
		var entrada = document.getElementById('codigo').value;
    var array_tokens = entrada.split(" ");
    var tipo_token = '-';
    var posicao_token = 0;
	var esperado="";
		var lista_tokens = [];
		var imprime="<table class='table table-bordered'><tr><th>Token</th><th>identificador</th><th>posicao</th><th>Esperado</th></tr>";
    for(token of array_tokens){
        if(eh_incognita(token)){
            tipo_token = TIPO_INCOGNITA;
			if(posicao_token==0){
				esperado='Operador ou palavra vazia';
			}
        }
        else if(eh_operador(token)){
			if(tipo_token ="INCOGNITA"){
				esperado='Opções de E';
				tipo_token = TIPO_OPERADOR;
			}
        }
		else if(eh_numero(token)){
            tipo_token = TIPO_NUMERO;
        }
		else{
            tipo_token = "Terminal";
        }
		if(posicao_token == array_tokens.length-1){
			imprime+="<tr><td>"+token+"</td><td>"+tipo_token+"</td><td>"+posicao_token+"</td><td>"+esperado+"</td></tr>";
			imprime+="<tr><td></td><td></td><td></td><td>"+array_tokens.length+" - ok ok ok</td></tr>";
		}
		else{
			imprime+="<tr><td>"+token+"</td><td>"+tipo_token+"</td><td>"+posicao_token+"</td><td>"+esperado+"</td></tr>";
		}
				posicao_token +=1;
				esperado="";
    }
    document.getElementById('result').innerHTML = imprime;
	/* Final da analise Lexica */
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
