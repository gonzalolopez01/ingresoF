/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let edad;
	let sexo;

	let contadorMujeres = 0;
	let acumuladorEdad = 0;
	let promedioEdad;
	let hombreMasPesado;
	let nombreHombreMasPesado;
	let flagPesado = 0;

	for (let i=0; i < 5; i++){
		nombre = prompt("ingrese nombre");
		peso = parseFloat(prompt("ingrese peso (mayor a 0)"));
		while (peso < 1 || isNaN(peso)){
			peso = parseFloat(prompt("valor inválido, reingrese peso (mayor a 0)"));
		}
		sexo = prompt("ingrese sexo (f-m)").toLowerCase();
		while (!(sexo == 'f' || sexo == 'm')){
			sexo = prompt("valor inválido, reingrese sexo (f-m)").toLowerCase();
		}
		edad = parseInt(prompt("ingrse edad"));
		while (edad < 1 || isNaN(edad)){
			edad = parseInt(prompt("valor inválido, reingrese la edad"));
		}

		if (sexo == 'f'){ //A
			contadorMujeres ++;
		}
		else{ //C
			if (flagPesado == 0){
				hombreMasPesado = peso;
				nombreHombreMasPesado = nombre;
				flagPesado = 1;
			}
			else{
				if (hombreMasPesado < peso){
					hombreMasPesado = peso;
					nombreHombreMasPesado = nombre;
				}
			}
		}

		acumuladorEdad = acumuladorEdad + edad; //B
		promedioEdad = acumuladorEdad / 5;

		

	}
	console.log("Cantidad de mujeres: "+ contadorMujeres);
	console.log("Edad promedio total: " + promedioEdad);
	console.log("Nombre del hombre mas pesado: " + nombreHombreMasPesado);
}
