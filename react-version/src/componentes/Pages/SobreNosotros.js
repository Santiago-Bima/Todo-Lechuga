import React, { Component } from 'react'
import './style/SobreNosotros.css'


export default class SobreNosotros extends Component {
    
    StyleCompleted(){
        return{
            marginLeft: '50px', 
            textDecoration: 'underline black'     
        }
    }
    
    render() {

        return (
            <main style={{flexDirection: 'column'}}>
                <div className="info">
                    <img className='local' src="/img/local.jfif" alt="nuestro local"/>
                    <h2 className="cursiva"  style={this.StyleCompleted()}>Nuestro local</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo commodi enim error eligendi amet perspiciatis deserunt saepe excepturi velit laboriosam in adipisci aut sed possimus itaque assumenda, omnis quam?, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi sequi amet odit aperiam tenetur ea deleniti atque provident, cumque quod explicabo quasi possimus consectetur veritatis? 
                        <br/>
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odit quod vitae temporibus, laudantium quisquam dolorem incidunt aliquam praesentium et beatae alias deleniti quo facilis iure possimus necessitatibus earum omnis rem qui molestiae quidem ex aperiam? Ab incidunt sit voluptate dolor asperiores corporis magni architecto reprehenderit rem sed sint ducimus minima quasi quod, libero qui quos! Sunt, excepturi dignissimos, eveniet provident minus sit quod incidunt alias sed tempora accusamus aliquid?
                    </p>
                </div>
                <div className="info acercNos">
                    <img className='nosotros' src="/img/nosotros.jfif" alt="Nosotros"/>
                    <h2 className="cursiva"  style={this.StyleCompleted()}>Acerca de Nosotros</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates magnam odit molestias cum inventore aspernatur dolor alias exercitationem sint dolorem placeat facilis aliquam, maxime illo necessitatibus ex fugiat. Neque nobis suscipit assumenda, consectetur voluptate ea unde quis minima et nulla minus praesentium ipsum eos exercitationem dolorum maxime enim nihil rerum.
                        <br/>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus tempore nihil numquam dolorem adipisci ratione culpa accusantium inventore laboriosam esse?
                    </p>
                </div>
            </main>
        )   
    }
}
