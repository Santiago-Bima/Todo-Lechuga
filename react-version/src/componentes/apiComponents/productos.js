import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { slugify } from '../../utils';

const ProductoItem=(props)=>{
    const {nombre, cuerpo, imagen, precio}=props;

    return(
        <div className='producto' id={slugify(nombre)}>
            <HashLink smooth to={`/menu#${slugify(nombre)}`}>
                <div dangerouslySetInnerHTML={{__html: imagen}}/>
                <div className='info'>
                    <h5>{nombre}</h5>
                    <p>{cuerpo}</p>
                    <p>{precio}</p>
                </div>
            </HashLink>
        </div>
    )
}

export default ProductoItem;