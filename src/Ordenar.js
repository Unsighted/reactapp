import React from 'react';

class Ordenar extends React.Component{
    
    actualizarCantidad(evento){

       // let input = document.querySelector('input');
       
            // let valor = input.value
            // let regexp = /^\w{0,1}$/
            
            // input.addEventListener("click",(evento)=>{
            // indice y valor obtenido al clickear onchange enviado a la constante llenar_array_platillos_div de Platillos.js y llenar_array_bebidas_div de Bebidas.js
            // if(regexp.test(valor) && input.maxLength < 1 && input.value == 1){

               this.props.hacerPedido(this.props.indice, evento.target.value);

            // }else{
            //     input.onkeyup=(()=>{input.value=''})
           
            // }
            
            }
    /*
        )}
*/
    
    
    render(){
        return(
            <div>
                <br/>
                <label className="espacio"> Cantidad: </label>
                <input onChange={this.actualizarCantidad.bind(this)} type="number" min='0' max='1'/>
                <label className="EspacioPlatillo"> Precio: ${this.props.precio}</label>
            </div>
        )
    }
}

export default Ordenar;