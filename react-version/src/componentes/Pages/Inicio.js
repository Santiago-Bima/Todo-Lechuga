import React, { Component } from 'react'
import './style/Inicio.css';
import axios from 'axios';
import NovedadItem from '../apiComponents/novedades';
import ProductoItem from '../apiComponents/productos';

export default class Inicio extends Component {

    constructor(props){
        super(props);
        this.state={
            loading: false,
            novedades: [],
            productosDestacados: []
        }
    }

    componentDidMount(){
        const cargarApiInfo=async()=>{
            this.setState({loading: true});
            const res=await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            const res2=await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
            var filtrado=res2.data.filter(producto=>producto.destacado===1);
            this.setState({novedades: res.data, loading: false, productosDestacados: filtrado});
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
        var noticiasReves=this.state.novedades.reverse();
        return (
            <main>
                <div className="columnas">
                    <section className="novedades">
                        <h1 className="cursiva"  style={this.StyleTitle()}>Novedades</h1>
                        
                        {this.state.loading ? (<p>Cargando...</p>) : (
                            <ul>
                                {noticiasReves.map(novedad => <li><NovedadItem key={novedad.id} titulo={novedad.titulo} cuerpo={novedad.cuerpo}/></li>)}
                            </ul>
                            
                        )}
                    </section>
                    <section className="destacados">
                        <h1 className="cursiva" style={this.StyleTitle()}>Platos Del Día</h1>
                        <div className="productos">
                            <ul>
                                {this.state.productosDestacados.map(productosFiltrados=>
                                    <li><ProductoItem key={productosFiltrados.id} nombre={productosFiltrados.nombre} cuerpo={productosFiltrados.cuerpo} imagen={productosFiltrados.imagen} precio={productosFiltrados.precio}/></li>
                                )}
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}