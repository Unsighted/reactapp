import React, { Component } from 'react';
import './Platillos.css';
import postre from './icom1.png';
import VarTiendaController from './tiendaController';
import Ordenar from './Ordenar';

class Postres extends Component{
	render(){
		let postres_div = [];
		// recorremos el arreglo que existe en tiendaController.js
		const llenar_array_postres_div = VarTiendaController.postres.forEach(
			(value, index)=>(
				postres_div.push(
					<div className="list-group-item" key={index}>
						<div className="panel-body">
							<img role="presentation" src={postre} className="ImagenPlatillo"/>
							<h2 className="TitlePlatillo"> {value.nombre} </h2>
							<div className="DescripcionPlatillo"> {value.descripcion} </div>
							<Ordenar precio={value.precio} indice={index}
							hacerPedido={(indice, cantidad)=>
							{VarTiendaController.postresEnLaOrden(indice, cantidad)}}/>
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
					{postres_div}
					</div>
				</div>
			</div>
			</div>
			);
	}
}

export default Postres;