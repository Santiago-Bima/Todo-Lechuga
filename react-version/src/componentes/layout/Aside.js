import React, { useEffect, useState } from 'react'
import './styles/Aside.css';
import axios from 'axios';

import { HashLink } from 'react-router-hash-link';
import { slugify } from '../../utils';

export default function Aside(props){

    const [isActive, setActive] = useState("false");
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tipos, setTipos] = useState([]);

    useEffect(()=>{
        const cargarProductos= async ()=>{
            setLoading(true);
            
            const res=await axios.get('http://localhost:3001/api/productos');
            const res2=await axios.get('http://localhost:3001/api/tipos');

            setProductos(res.data);
            setTipos(res2.data);
            setLoading(false);
        }
        cargarProductos();
    },[]);

    const activado=()=> {
        setActive(!isActive);
    }


        return (
            //  ver como vincular los link a los productos
            <aside className={isActive?'menu':'menu  activado'}>
                <h1 className="cursiva"  style={{marginLeft: '50px', textDecoration: 'underline black'}}>Menú</h1>
                <div id="flecha"  onClick={activado}>
                    <i className={isActive?'bx bxs-right-arrow flecha':'bx bxs-right-arrow flecha  activado'}></i>
                </div>
                <ul>
                    {loading ? (<p>Cargando...</p>) : (
                        tipos.map(tipo=>(
                            <li className='subindice' key={tipo.id}>
                                <h4><HashLink smooth to={`/menu#${slugify(tipo.tipo)}`} className="linkprod" onClick={activado}>{tipo.tipo}</HashLink></h4>
                                <ul>
                                    {productos.filter(producto=>producto.tipo_de_producto===tipo.tipo).map(productoFiltrado=>
                                        <div key={productoFiltrado.id}>
                                            <li><HashLink smooth to={`/menu#${slugify(productoFiltrado.nombre)}`} className='linkprod' onClick={activado}>{productoFiltrado.nombre}</HashLink></li>
                                        </div>
                                    )}
                                </ul>
                            </li>
                        ))
                    )}
                </ul>
            </aside>
        )
}
