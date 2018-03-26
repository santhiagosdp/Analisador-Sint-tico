# Enunciado:
* Implemente um analisador léxico e sintático para a gramática de expressões aritméticas.
* As regras da gramática devem ser definidas diretamente no código-fonte do programa.
* O programa deve realizar as análises léxica e sintática.
* A saída do programa deve ser uma indicação de que a sentença de entrada está correta ou incorreta (léxica ou sintaticamente).

```
E        ::= E OPERADOR E | E | '(' E ')' | INCOGNITA | NUMERO
OPERADOR ::= '+' | '-' | '*' | '/'
INCOGNITA ::= 'x' | 'y'
NUMERO   ::= [0-9]+
```


## Bônus: o programa deve apresentar a AST da sentença de entrada (graficamente).
