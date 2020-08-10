/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let destino;
	let temporada;
	let cantidadPersonas;
	let continuar;

	let destinoMasElejido;
	let viajesBariloche = 0;
	let viajesCataratas = 0;
	let viajesSalta = 0;
	let mayorCantidadPersonas;
	let sexoTitularMayorCantidadPersonas;
	let flagpasajero = 0;
	let acumuladorPersonasInvierno = 0;
	let contadorInvierno = 0;
	let promedioPersonasInviernoViaje = 0;

	do{
		sexo = prompt("ingrese sexo del titular (f-m)").toLowerCase();
		while (!(sexo == 'f' || sexo == 'm')){
			sexo = prompt("valor inválido, reingrese sexo (f-m)").toLowerCase();
		}
		destino = prompt("ingrese destino ('B'-Bariloche, 'C'- Cataratas, 'S'-Salta)").toLowerCase();
		while (!(destino == 'b' || destino == 'c' || destino == 's')){
			destino = prompt("valor inválido, reingrese destino ('B' - Bariloche, 'C' - Cataratas, 'S'- Salta)").toLowerCase();
		}
		temporada = prompt("ingrse temporada ('O' otoño, 'I' invierno, 'V' verano, 'P' primavera)").toLowerCase();
		while (!(temporada == 'o' || temporada == 'i' || temporada == 'v' || temporada == 'p')){
			temporada = prompt("valor inválido, reingrese temporada ('O' otoño, 'I' invierno, 'V' verano, 'P' primavera)").toLowerCase();
		}
		cantidadPersonas = parseInt(prompt("ingrese cantidad de personas que viajan"));
		while (cantidadPersonas < 0 || isNaN(cantidadPersonas)){
			cantidadPersonas = parseInt(prompt("valor inválido, reingrese la cantidad de personas"));
		}
		continuar = prompt("ingrese 'C' para continuar o 'S' para salir").toLowerCase();
		while (!(continuar == 'c' || continuar == 's')){
			  continuar = prompt("valor inválido, ingrese 'C' para continuar o 'S' para salir").toLowerCase();
		}
		
		switch (destino){ //A
			case 'b':
				viajesBariloche = viajesBariloche + 1;
				break;
			case 'c':
				viajesCataratas = viajesCataratas + 1;
				break;
			case 's':
				viajesSalta = viajesSalta + 1;
				break;
		}
		
		
		if (viajesBariloche > viajesCataratas && viajesBariloche > viajesSalta){
			destinoMasElejido = "Bariloche";
		}
		else if (viajesCataratas >= viajesBariloche && viajesCataratas > viajesSalta){
			destinoMasElejido = "Cataratas";
		}
		else { 
			destinoMasElejido = "Salta";
		}

		if (flagpasajero == 0){ //B
			mayorCantidadPersonas = cantidadPersonas;
			sexoTitularMayorCantidadPersonas = sexo;
			flagpasajero = 1;
		}
		else{
			if (mayorCantidadPersonas < cantidadPersonas){
				mayorCantidadPersonas = cantidadPersonas;
				sexoTitularMayorCantidadPersonas = sexo;
			}
		}

		if (temporada == 'i'){ //C
			acumuladorPersonasInvierno = acumuladorPersonasInvierno + cantidadPersonas;
			contadorInvierno ++;
		}

			
	}while (continuar == 'c');

	promedioPersonasInviernoViaje = acumuladorPersonasInvierno / contadorInvierno;

	console.log ("lugar mas elegido: " + destinoMasElejido);
	console.log ("sexo titular que lleva mas pasajeros: " + sexoTitularMayorCantidadPersonas);
	if (promedioPersonasInviernoViaje >= 0){
		console.log ("promedio de personas por viaje que viajan en invierno: " + promedioPersonasInviernoViaje);
	}
	else{
		console.log ("promedio de personas por viajes que viajan en invierno: 0");
	}
	







}
