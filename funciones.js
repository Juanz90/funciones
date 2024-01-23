//1
function saludo() {
    console.log('¡Hola mundo!');
}
//2
function mostrarNombre(nombre) {
    console.log(`¡Hola ${nombre}!`);
}
mostrarNombre("IngreseNombre");
//3
function multiplicacion(numero) {
    return numero * 2;
}
let calcularMultiplicacion = multiplicacion(10);
console.log(multiplicacion);

//4
function promedio(a, b, c) {
    return (a + b + c)/3; 
}
let calcularPromedio = promedio(5,4,3);
console.log(calcularPromedio);
//5
function numGrande (a,b) {
    return a > b ? a : b;
}
let calcularGrande = numGrande(5,15);
console.log(calcularGrande);
//6
function numMultiplicado (numero) {
    return numero*numero;
}
let resultadoMult = numMultiplicado(5);
console.log(resultadoMult);