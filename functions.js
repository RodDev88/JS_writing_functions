/* //Different ways to write a function in JS

//------------------------------

//Standart declaration without parametres

/* function suma() {
    let a = 5, b = 4;
    let resultado = a + b;
    console.log("Suma value standart function: " + resultado);
}

suma();
 */
//Ojo chat GPT me recomienda no utilizar el mismo nombre en la función y como variable
//Como solucion nos sugiere renombrar el nombre de la variable a resultado

//------------------------------

//Function declaration without parametres

/* const suma_1 = function () {
    let a = 5, b = 4;
    suma = a + b;
    console.log("Suma value function declaration: " + suma);
}

//Calling function
suma_1(); */

//------------------------------

//Arrow Function without parametres

/* const suma_2 = () => {
    let a = 5, b = 4;
    suma = a + b;
    console.log("Suma value arrow function: " + suma);
}
//Calling function
suma_2() */

//------------------------------
//------------------------------
//------------------------------

//Standart declaration with parametres

/* function suma(a, b) {
    let resultado = a + b;
    console.log("Suma value standart function: " + resultado);
}

suma(4,5); */

//------------------------------

//Function declaration with parametres

/* const suma_1 = function (a, b) {
    suma = a + b;
    console.log("Suma value function declaration: " + suma);
}

//Calling function
suma_1(4,5); */

//------------------------------

//Arrow Function with parametres

const suma_2 = (a, b) => {
    suma = a + b;
    console.log("Suma value arrow function: " + suma);
}
//Calling function
suma_2(4,5);
