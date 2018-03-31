import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';



const Navega= ()=>(
    <Router>
        <section>
  <h1> REACT ROUTER  JAreina</h1>
<nav>
    <ul>
        <li>
            <Link to="/">inicio</Link>
        </li>
        <li>
            <Link to="/about">about</Link>
        </li>
        <li>
            <Link to="/quehacemos">Qué hacemos</Link>
        </li>
        <li>
            <Link to="/contacto">contacto</Link>
        </li>
    </ul>
</nav>
<hr/>
<Route path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/quehacemos" component={QueHacemos}/>
<Route path="/contacto" component={Contacto}/>
</section>
    </Router>
  
)


const Home = ()=>(
    <div> <h2> home</ h2></div>
)
const About = ()=>(
    <div><h2>  about</ h2></div>
)

const QueHacemos = ()=>(
    <div><h2> Qué hacemos</ h2></div>
)

// match coincidencia con la ruta a cargar
const Contacto = ({ match }) => (
    <div>
      <h2>CONTACTO</h2>
      <ul>
        <li>
          <Link to={`${match.url}/email`}>Email</Link>
        </li>
        <li>
          <Link to={`${match.url}/web`}>web</Link>
        </li>
        <li>
          <Link to={`${match.url}/telefono`}>teléfono</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:tipo`} component={ContactoDetalle} />
      <Route
        exact
        path={match.url}
        render={() => <h3>SELECCIONA TIPO DE CONTACTO</h3>}
      />
    </div>
  );
  
  const ContactoDetalle = ({ match }) => (
    <div>
      <h3>seleccionado : {match.params.tipo}</h3>
    </div>
)

export default Navega;