import bad from './img/bad.vibes.memes.svg';

function Usuario_navbar (props) {
    return (
        <div class="usuario_nav">
            <img src ={props.img} />
            <div class="texto">
                <h1>{props.Nome_usuario}</h1>
                <h2>{props.Apelido_usuario}</h2>
            </div>
        </div>
    )
}
function Sugestoes (props){
    return (

        <div class="sugestao">
            <img src={props.img}></img>
            <div class="texto_sugestao">
                <h1>{props.nome}</h1>
                <h2>Segue você</h2>
            </div>
            <h3>Seguir</h3>
        </div>
    )
}


function Navbar (){
    let envio= [{usuario_img: "https://www.futbox.com/img/v1/d27/d15/ab9/d21/0b41614555341d84cb14.png" ,Nome_usuario: "Corinthians", Apelido_usuario : "Timão"}]
    let usuario = envio.map(Ref=> <Usuario_navbar img = {Ref.usuario_img} Nome_usuario={Ref.Nome_usuario} Apelido_usuario= {Ref.Apelido_usuario} />)
    let envio_sugestoes =[{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9al4BCLweIVOGJS2Ld4FTDP-AAsVIa89Rg&usqp=CAU" ,nome:"La pelota"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9al4BCLweIVOGJS2Ld4FTDP-AAsVIa89Rg&usqp=CAU" ,nome:"La pelota"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9al4BCLweIVOGJS2Ld4FTDP-AAsVIa89Rg&usqp=CAU" ,nome:"La pelota"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9al4BCLweIVOGJS2Ld4FTDP-AAsVIa89Rg&usqp=CAU" ,nome:"La pelota"},{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9al4BCLweIVOGJS2Ld4FTDP-AAsVIa89Rg&usqp=CAU" ,nome:"La pelota"}]
    let sugestoes = envio_sugestoes.map(Refe=> <Sugestoes img ={Refe.img} nome={Refe.nome} />)
    return (
        <div class="sidebar">
            {usuario}
            <div class="titulo"> 
            <span>Sugestão para você  </span> <span> Ver tudo  </span>
            </div>
            {sugestoes}
            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            <br />
            <br />
            <br />
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}
export default Navbar;