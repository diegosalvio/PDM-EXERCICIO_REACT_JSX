/* eslint-disable jsx-a11y/alt-text */
/*
Nome dos integrantes:
Diego Salvio
Caique Trivino
Gabriel Silveira 
*/
import React from 'react'
import ReactDOM from 'react-dom'
import medico1 from './images/medico1.jpg'
import './style.css'



const App = () => {

    /* const estiloCaixa = {
        // margin: 'auto',
        backgroundColor: '#EEE',
        width: '100%',
        height: '75',
        borderStyle: 'ridge',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-between'

    } */

    const estiloCaixa = {
        margin: 'auto',
        width: '90%', 
        height: '30%',
        backgroundColor: '#EEE',
        padding: 12,
        borderRadius: 8
    }



    
    let medicos = [ 'José da Silva',
                    'Maria da Silva',
                    'Jaqueline Mendes']
    
    return (
         <div style={estiloCaixa}>
             <label htmlFor="titulo" style={{display:'block', marginBottom: 4, textAlign: 'center'}}>Profissionais da Saúde</label>
             <div style={{backgroundColor: '#EEE',
                            width: '100%',
                            height: '75',
                            borderStyle: 'ridge',
                            borderRadius: 8,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                 <div className="caixa">
                    <img id="img" src={medico1} />
                    <text id="text" >{medicos[0]}</text>
                 </div>
                 <div className="caixa" /* style={{marginLeft: '5%', marginRight: '5%'}} */>
                    <img id="img" src={process.env.PUBLIC_URL +'/medico2.jpg'} alt="medico2" />
                    <text id="text" >{medicos[1]}</text>
                 </div>
                 <div className="caixa">
                 <img id="img"
                 src='https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
                 <text id="text" >{medicos[2]}</text>
                 </div>
             </div>
         </div>
        )
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)