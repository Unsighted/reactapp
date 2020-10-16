import React from 'react';
import './Platillos.css';
import pizza from './pizza.png';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';

class Platillos extends React.Component{
	render(){
		let platillos_div = [];
		// recorremos el arreglo que existe en tiendaController.js
		const llenar_array_platillos_div =  VarTiendaController.platillos.forEach(
			(value, index)=>(
				platillos_div.push(
					<div className="list-group-item" key={index}>
						<div className="panel-body">
							<img role="presentation" src={pizza} className="ImagenPlatillo"/>
							<h2 className="TitlePlatillo">{value.nombre}</h2>
                            <div className="DescripcionPlatillo">{value.descripcion}</div>
							{/* tomamos el valor precio del componente ordenar */}
							<Ordenar precio={value.precio} indice={index}
							// obtenemos en la funciòn hacerPedido indice y valor para que ponerEnLaOrden sepa donde actualizar los valores del pedido correspondiente.
							hacerPedido={(indice, cantidad)=>{ VarTiendaController.ponerEnLaOrden(indice, cantidad) } } />
                        </div>
					</div>
					)
				)
			)


		return(
			<div className="container col-md-6">
				<div>
					<div className="panel panel-primary">
						<div className="list-group Platillo-Menu">
						{platillos_div}
						</div>
					</div>
				</div>
			</div>
			);
	}
}

export default Platillos;