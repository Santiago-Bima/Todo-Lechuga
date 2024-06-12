import React from 'react';

const NovedadItem=(props)=>{
    const {titulo, cuerpo}=props;

    return(
        <div className='noticia'>
            <h1>{titulo}</h1>
            <p>{cuerpo}</p>
        </div>
    )
}

export default NovedadItem;