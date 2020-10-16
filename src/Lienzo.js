import React from 'react';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import Pedidos from './Pedidos';
import Postres from './Postres';
import './Platillos.css';
import { Link } from 'react-router-dom';

class Lienzo extends React.Component{
	render(){
		return(
            <div className="container">
                <div className="jumbotron">
                    <h2 className="title">Pizzalandia</h2>
                </div>
                <div>
                    <ul className="nav nav-pills ListMargin">
                        {/* <li role="presentation" className="active"><Link to="/">Pizzas</Link></li> */}
                        {/* <li role="presentation" className="active"><Link to="/bebidas">Bebidas</Link></li> */}
                        {/* <li role="presentation" className="active"><Link to="/postres">Postres</Link></li> */}
                    </ul>
                </div>
                 <Platillos/>
                <Bebidas/>
              <Pedidos/>
            <Postres/>
        </div>
            )
	}
}

export default Lienzo;