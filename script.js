   
const vaciar = () => {
  document.getElementById("pantalla").value = "";
};

const validar = (x = 0) => {
  
  let val = document.getElementById("pantalla");

  let de = Number.isInteger(+val.value);
  let de1 = Number.isInteger(+x);

  if (!de || !de1) {
	val.value = "ERROR debe Ingresar un numero valido";
	return false;
  }
  return true;
};

const validarcsv = () => {
  
  let lista = document.getElementById("pantalla").value;
  let val = document.getElementById("pantalla");

  lista = lista.split(",");

  for (let i = 0; i < lista.length; i++) {
	if (isNaN(lista[i])) {
	  val.value = "ERROR debe Ingresar un numero valido";
	  return false;
	}
  }
  return true;
};

/*************Cuadrado*****************/
const cuadrado = () => {
  if (validar()) {
	let num = document.getElementById("pantalla");
	num.value = num.value * num.value;
	rellenar_info(num.value);
  };
};

function rellenar_info(x) {
  let titulo = document.getElementById("info");
  if (x < 100) {
	titulo.innerHTML = "Info: El resultado es menor que 100";
  } else if(x < 200){
	titulo.innerHTML = "Info: El resultado está entre 100 y 200";
  } else {
	titulo.innerHTML = "Info: El resultado es superior a 200";
  }
};

/*************Modulo*****************/
const mod = () => {
  if (validar()) {
	let num = document.getElementById("pantalla");
	if (num.value < 0) {
	  num.value = num.value * (-1);
	}
  }
};

/*************Factorial*****************/
const fact = () => {
  if (validar()) {
	let num = document.getElementById("pantalla");
	let a = 1;
	if (num.value > 1) {
	  for (let i = 2; i <= num.value; i++) {
		a = a * i;
	  }
	  num.value = a;
	}
  }
};

/*****************************************
		Operaciones Binarias
******************************************/
let numero1 = 0;
let operador = "";

const add =  () => {
  operador = "suma";
  numero1 = document.getElementById("pantalla").value;
};
const resta =  () => {
  operador = "resta";
  numero1 = document.getElementById("pantalla").value;
};
const mul =  () => {
  operador = "mul";
  numero1 = document.getElementById("pantalla").value;
};
const division =  () => {
  operador = "division";
  numero1 = document.getElementById("pantalla").value;
};  
const resto =  () => {
  operador = "resto";
  numero1 = document.getElementById("pantalla").value;
};
const potencia =  () => {
  operador = "potencia";
  numero1 = document.getElementById("pantalla").value;
};

const eq = () => {
  if (validar(numero1)) {
	let numero2 = document.getElementById("pantalla").value;
	let numRes = document.querySelector("#numRes");
	numRes.textContent = `Num1: ${numero1} Num2: ${numero2}`;
	
	switch (operador) {
	  case "suma":
		numero1 = +numero1 + +numero2;
		break;
	  case "resta":
		numero1= +numero1 - +numero2;
		break;
	  case "mul":
		numero1 = +numero1 * +numero2;
		break;
	  case "division":
		numero1 = +numero1 / +numero2;
		break;
	  case "resto":
		numero1 = +numero1 % +numero2;
		break;
	  case "potencia":
		numero1 = (+numero1) ** +numero2;
		break;

	  default:
		break;
	}

	document.getElementById("pantalla").value = numero1;
	operador = "";
  }
};

/*****************************************
		Operaciones en formato CSV
******************************************/

/*************Sumatorio*****************/
const sumatorio = () => {
  if (validarcsv()) {
	let lista = document.getElementById("pantalla").value;
	let total = 0;

	lista = lista.split(",");

	for (let index = 0; index < lista.length; index++) {
	  total += +lista[index];
	}

	document.getElementById("pantalla").value = total;
  }
};
/*************Ordenar*****************/
const ordenar = () => {
  if (validarcsv()) {
	let lista = document.getElementById("pantalla").value;

	lista = lista.split(",");
	
	//ORDENAMIENTO-BURBUJA
	for (let a = 0; a < lista.length; a++) {
	  for (let b = 0; b < lista.length-1; b++) {
		if (+lista[b] > +lista[b+1]) {
		  let num = lista[b+1]; 
		  lista[b+1] = lista[b]; 
		  lista[b] = num;
		}
	  }
	}

	document.getElementById("pantalla").value = lista;
  }
};
/*************Revertir*****************/
const revertir = () => {
  if (validarcsv()) {
	let lista = document.getElementById("pantalla").value;

	lista = lista.split(",");
	lista = lista.reverse();
	document.getElementById("pantalla").value = lista;
  }
};
/*************Quitar*****************/
const quitar = () => {
  if (validarcsv()) {
	let lista = document.getElementById("pantalla").value;

	lista = lista.split(",");
	lista = lista.slice(0,-1);
	document.getElementById("pantalla").value = lista;
  }
};

