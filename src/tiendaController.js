import { extendObservable } from 'mobx';

class TiendaController {
	constructor(){
		extendObservable(this,
			{
				platillos: [
				{nombre: 'Pizza mixta',
					descripcion: 'Tomate, rúcula, panceta',
					precio: 300,
					cantidad: 0},
				{nombre: 'Napolitana',
					descripcion: 'Muzzarela, tomate, orégano',
					precio: 250,
					cantidad: 0},
				{nombre: 'Rokefort',
					descripcion: 'Rokefort y pimienta',
					precio: 240,
					cantidad: 0}],
				bebidas: [
				{nombre: 'Cerveza',
					descripcion: 'Porrón chico',
					precio: 20,
					cantidad: 0},
				{nombre: 'Cerveza',
					descripcion: 'Litro',
					precio: 30,
					cantidad: 0},
				{nombre: 'Cerveza',
					descripcion: 'Negra',
					precio: 40,
					cantidad: 0}],
					postres: [
				{nombre: 'Helado',
					descripcion: 'Tres sabores',
					precio: 75,
					cantidad: 0},
				{nombre: 'Flan',
					descripcion: 'Dulce de leche o crema',
					precio: 43,
					cantidad: 0},
				{nombre: 'Porción de torta',
					descripcion: 'Negra o blanca',
					precio: 40,
					cantidad: 0}]	

			});
	}
	// busca el indicePlatillo en platillos, si coincide le pone la nueva cantidad actualizada.
	ponerEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.platillos.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.platillos[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

    // busca el indicePlatillo en platillos, si coincide le pone la nueva cantidad actualizada.
	bebidasEnLaOrden(indiceBebida, cantidadBebida){
		this.bebidas.forEach((value, index)=>{
				if(indiceBebida === index){
					this.bebidas[index].cantidad = cantidadBebida;
				}
			}
		)
	}

	postresEnLaOrden(indicePostre, cantidadPostre){
		this.postres.forEach((value, index)=>{
				if(indicePostre === index){
					this.postres[index].cantidad = cantidadPostre;
				}
			}
		)
	}
}

var VarTiendaController = new TiendaController;

export default VarTiendaController;