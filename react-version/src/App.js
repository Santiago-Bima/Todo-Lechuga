import React, {Component} from 'react';
import Nav from './componentes/layout/Nav'
import Footer from './componentes/layout/Footer'
import Aside from './componentes/layout/Aside';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Inicio from './componentes/Pages/Inicio'
import Menu from './componentes/Pages/Menu';
import Nosotros from './componentes/Pages/SobreNosotros'
import Contactanos from './componentes/Pages/Contactanos';




class App extends Component {

    render(){
        return (
            <>
                <Router>
                    <header>
                        <Nav></Nav>
                    </header>
                    <Switch>
                        <Route exact path='/'>
                            <Inicio></Inicio>
                        </Route>
                        <Route path='/menu' render={()=>{
                                return (
                                    <>
                                        <Aside></Aside>
                                        <Menu></Menu>
                                    </>
                                )
                            }}>
                        </Route>
                        <Route path='/nosotros' component={Nosotros}>
                        </Route>
                        <Route path='/contactanos' component={Contactanos}>
                        </Route>
                    </Switch>
                    <footer>
                        <Footer></Footer>
                    </footer>
                </Router>
            </>
        );
    }
}

export default App;