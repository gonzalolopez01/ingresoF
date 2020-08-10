/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso; //kg
  let tipo; //solido o liquido
  let continuar;

  let acumuladorPeso = 0;
  let marcaMasCaroLiquido;
  let marcaMasBaratoSolido;
  let mayorPrecioLiquido;
  let menorPrecioSolido;
  let flagliquido = 0;
  let flagsolido = 0;

  do{
    marca = prompt("ingrese marca");
    precio = parseFloat(prompt("ingrese precio"));
    while (precio < 1 || isNaN(precio)){
			precio = parseFloat(prompt("valor inválido, reingrese precio)"));
    }
    peso = parseFloat(prompt("ingrese peso (kg)"));
    while (peso < 1 || isNaN(peso)){
      peso = parseFloat(prompt("valor inválido, reingrese el peso"));
    }
    tipo = prompt ("ingrese tipo (S para sólido - L para líquido").toLowerCase();
    while (!(tipo == 's' || tipo == 'l')){
			tipo = prompt("valor inválido, reingrese tipo (S-L)").toLowerCase();
    }
    
    continuar = prompt("ingrese 'C' para continuar o 'S' para salir").toLowerCase();
		while (!(continuar == 'c' || continuar == 's')){
      continuar = prompt("valor inválido, ingrese 'C' para continuar o 'S' para salir").toLowerCase();
    }

    acumuladorPeso = acumuladorPeso + peso; //A

    if (tipo == 'l'){  //B
      if (flagliquido == 0){
        mayorPrecioLiquido = precio;
        marcaMasCaroLiquido = marca;
        flagliquido = 1;
      }
      else{
        if (mayorPrecioLiquido < precio){
          mayorPrecioLiquido = precio;
          marcaMasCaroLiquido = marca;
        }
      }
    }
    else{
      if (flagsolido == 0){ //C
        menorPrecioSolido = precio;
        marcaMasBaratoSolido = marca;
        flagsolido = 1;
      }
      else{
        if (menorPrecioSolido > precio){
          menorPrecioSolido = precio;
          marcaMasBaratoSolido = marca;
        }
      }

    }

  }while (continuar == 'c');

  console.log("Peso total de la comra: " + acumuladorPeso);
  console.log("Marca mas cara de los productos líquidos: " + marcaMasCaroLiquido);
  console.log("Marca mas barata de los productos sólidos: " + marcaMasBaratoSolido);



}
