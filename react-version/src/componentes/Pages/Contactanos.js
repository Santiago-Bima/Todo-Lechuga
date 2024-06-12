import React, { useState } from 'react';
import './style/Contactanos.css';
import axios from 'axios';


export default function Contactanos(){

    const initialForm={
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending]=useState(false);
    const [msg, setMsg]=useState('');
    const [formData, setFormData]=useState(initialForm);
    
    const handleChange = e =>{
        const {name, value}=e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit=async e=>{
        e.preventDefault();
        setMsg('');
        setSending(true);
        const res= await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(res.data.message);
        if(res.data.error===false){
            setFormData(initialForm);
        }
    }

        return (
            <main>
                <div className="col left">
                    <h2 className="cursiva"  style={{ textDecoration: 'underline black', marginLeft: '75px'}}>Contacto Rapido</h2>
                    <form action="/contacto" method="post" className="form" onSubmit={handleSubmit}>
                        <p>
                            <input type="text" placeholder="Nombre" name='nombre' value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <input type="email" placeholder="Email"  name='email' value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <input type="text" placeholder="Tél:"  name='telefono' value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <textarea id="comentario" placeholder="Algo que decir?"  name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p className="acciones">
                            <input type="submit" value="Enviar"/>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>
                </div>
                <div className="col right">
                    <h2 className="cursiva"  style={{textDecoration: 'underline black', marginLeft: '75px'}}>Otras vías de contacto</h2>
                    <p>Tambien se puede comunicar con nosotros por estos medios...</p>
                    <ul>
                        <li>Teléfono: 351-655-4663</li>
                        <li>Email: todolechuga@gmail.com</li>
                        <li>Facebook: todo-lechuga</li>
                        <li>Twitter: todo_lechuga</li>
                    </ul>
                </div>
            </main>
        )
}
