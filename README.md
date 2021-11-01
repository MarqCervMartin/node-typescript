# Typescript

## Tipado en Typescript

### Explícito
Define una sintaxis para la creación de variables con tipo de dato.

### Inferido
TypeScript tiene la habilidad de "deducir" el tipo en función de un valor.


### Para el caso explícito.
Deberemos utilizar la notación pos-fija.

´´´
nombreVariable : Tipo De Dato
´´´
":" Permite especificar el tipo de dato.

### Para el caso de el tipo de dato inferido
Tomar en cuenta el nombre de la variable y el valor inicial
´´´
nombreVariable = Valor
´´´

## Tipos Básicos

- Number
- Boolean
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never
- Object

## Tipo Any

- Usado para capturar valores dinámicos.
- Los valores pueden cambiar de tipo en el tiempo: 
    - APIs externas.
    - Librerías de terceros.

## Tipo Void

Void es lo opuesto a any representa la ausencia de tipo, usualmente usado para el tipo de retorno de funciones.

## Tipo Never
Representa el tipo de valor que nunca ocurre
- Funciones que lanzan exepciones
- Funciones que nunca retornan un valor

## Tipo null y undefined
En typescript ambos valores tienen sus respectivos tipos. Se pueden asumir como subtipos del tipo any
