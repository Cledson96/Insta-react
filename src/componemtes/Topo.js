import logo from "./img/logo.png";

function Topo() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon class="icone" name="logo-instagram"></ion-icon>
                    <div class="separador media"></div>
                    <img class="insta media" src={logo} />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                    <img class="insta mediaa" src={logo} />
                </div>

                <div class="icones">
                    <ion-icon class="icone" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="icone media" name="compass-outline"></ion-icon>
                    <ion-icon class="icone media" name="heart-outline"></ion-icon>
                    <ion-icon class="icone media" name="person-outline"></ion-icon>

                </div>

            </div>

        </div>


    )
}

export default Topo;