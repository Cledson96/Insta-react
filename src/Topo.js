import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logo from "./img/logo.png";
import logo_insta from "./img/logo_insta.png";
import direct from "./img/direct.png";
import bussula from "./img/bussula.ico";
import heart from "./img/heart.png";
import person from "./img/person.webp";
function Topo() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <img class="icone" src={logo_insta} />
                    <div class="separador"></div>
                    <img class="insta" src={logo} />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <img class="icone" src={direct} />
                    <img class="icone" src={bussula} />
                    <img class="icone" src={heart} />
                    <img class="icone" src={person} />
                </div>

            </div>

        </div>


    )
}

export default Topo;