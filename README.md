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

## Tipo object
object es el tipo de dato que represenya un valor no primitivo. Es el tipo variable que no sea number, boolean, null, undefined, etc.

Object vs object

- Object: instancia de la clase Object de javascript.
- object: tipo para valores no primitivos

## Array
Estructura que permite contener un conjunto de valores.

Usa dos notaciones: [] y Array<tipo>

A los carácteres <> se les conoce como genéricos.

## Tuple
Las tuplas permiten expresar un arreglo con un número fijo de elementos. Los tipos de datos son conocidos.

## Enum
Los enumerados permiten definir un conjunto de constantes con nombre, tienen la ventaja de adaptarse al contexto de nuestra aplicación.



