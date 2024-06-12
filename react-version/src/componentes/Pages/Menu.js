import React, { Component } from 'react'
import './style/Menu.css'
import axios from 'axios';
import ProductoItem from '../apiComponents/productos';

import { slugify } from '../../utils';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false,
            productos: [],
            tipos: []
        }
    }

    componentDidMount(){
        const cargarApiInfo=async()=>{
            this.setState({loading: true});
            const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
            const res2=await axios.get(`${process.env.REACT_APP_API_URL}/api/tipos`);
            this.setState({loading: false, productos: res.data, tipos: res2.data});
        }
        cargarApiInfo();
    }

    StyleTitle(){
        return{
            marginLeft: '50px', 
            textDecoration: 'underline black'     
        }
    }

    render() {
        return (
            <main>
                <section className="destacados">
                    <h1 className="cursiva" style={this.StyleTitle()}>Menú</h1>
                    {this.state.loading ? (<p>Cargando...</p>) : (
                        <div className="productos">
                            {this.state.tipos.map(tipo=>
                                <div key={tipo.id}>
                                    <h2  id={slugify(tipo.tipo)} className="cursiva" style={this.StyleTitle()} key={tipo.id}>{tipo.tipo}</h2>
                                    {this.state.productos.filter(producto=>producto.tipo_de_producto===tipo.tipo).map(prodSeparado=>    
                                        <ProductoItem key={prodSeparado.id} nombre={prodSeparado.nombre} cuerpo={prodSeparado.cuerpo} imagen={prodSeparado.imagen} precio={prodSeparado.precio}/>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </main>
        )
    }
}
