import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import Lienzo from './Lienzo';
import Bebidas from './Bebidas';
import Platillos from './Platillos';
import Postres from './Postres';
import 'bootstrap/dist/css/bootstrap.css';

let App = (

 <HashRouter>
    <Switch>
      <Route path='/' component={Lienzo} exact/>
      <Route path='/pizzas'  component={Platillos} exact />
      <Route path='/bebidas' component={Bebidas}/>
      <Route path='/postres'  component={Postres} exact />
    </Switch>
</HashRouter>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);

//render(<App />, document.getElementById("root"))

