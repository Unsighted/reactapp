import React from 'react';
import VarTiendaController from './tiendaController';
import { observer } from 'mobx-react';

class Pedidos extends React.Component{
    render(){
        let PlatillosPedidos = [];
        let BebidasPedidos = [];
        let PostresPedidos = [];
        // llenar el arreglos de pedidos con sus nuevos valores
        const llenar_PlatillosPedidos = VarTiendaController.platillos.forEach(
            (value, index)=> {
                // if(value.cantidad != 0){
             
                PlatillosPedidos.push(
            <div className="list-group-item" key={index}>
                <div className="panel-body">
                    <h4> {value.nombre} </h4><br/>
                    <div className="DescripcionPlatillo">{value.descripcion}</div>
                    <div className="APrecioCantidad">
                    <span>Cantidad: {value.cantidad}</span>
                    <span className="PrecioPlatillo">Precio: ${value.cantidad*value.precio}</span>
                </div>
            </div>
        </div>
        )
      }
   // }
  )
         // llenar el arreglos de pedidos con sus nuevos valores
        const llenar_BebidasPedidos =  VarTiendaController.bebidas.forEach(
            (value, index)=> {
               //if(value.cantidad !== 0){
                BebidasPedidos.push(
            <div className="list-group-item" key={index}>
                <div className="panel-body">
                    <h4> {value.nombre} </h4><br/>
                    <div className="DescripcionPlatillo">{value.descripcion}</div>
                    <div className="APrecioCantidad">
                    <span>Cantidad: {value.cantidad}</span>
                    <span className="PrecioPlatillo">Precio:{value.cantidad*value.precio}</span>
                </div>
            </div>
        </div>
        )
      }
    //}
  )
    // llenar el arreglos de pedidos con sus nuevos valores  
    const llenar_PostresPedidos =  VarTiendaController.postres.forEach(
        (value, index)=> {
           //if(value.cantidad !== 0){
            PostresPedidos.push(
        <div className="list-group-item" key={index}>
            <div className="panel-body">
                <h4> {value.nombre} </h4><br/>
                <div className="DescripcionPlatillo">{value.descripcion}</div>
                <div className="APrecioCantidad">
                <span>Cantidad: {value.cantidad}</span>
                <span className="PrecioPlatillo">Precio:{value.cantidad*value.precio}</span>
            </div>
        </div>
    </div>
    )
  }
//}
)

        return(
                <div>
                    <div className="container col-md-6">
                        <div className="panel panel-primary">
                            <div className="list-group Pedidos-Menu">
                                {PlatillosPedidos}
                              
                            </div>     
                        </div>
                    </div>
                    <div className="container col-md-6">
                        <div className="panel panel-primary">
                            <div className="list-group Pedidos-Menu">
                                {BebidasPedidos}
                            </div>     
                        </div>
                    </div>
                
                {/* <div className="container col-md-6">
                        <div className="panel panel-primary">
                            <div className="list-group Pedidos-Menu">
                                {PostresPedidos}
                            </div>     
                        </div>
                    </div> */}
                </div>
        )
    }
}

export default observer(Pedidos);