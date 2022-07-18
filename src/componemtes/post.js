import curtido from "./img/curtida.png";
function curtida(ref) {
  let arruma = "." + ref;
  document.querySelector(arruma).children[0].classList.toggle("desativa")
  document.querySelector(arruma).children[1].classList.toggle("desativa")

}
function Add_post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img_usuario} />
          {props.tittle}
        </div>
        ...
      </div>

      <div class="img_publicada">
        <img src={props.img_post} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div class={props.id + " iconss"}>
            <ion-icon onClick={() => curtida(props.id)} class="curtir" name="heart-outline"></ion-icon>
            <img onClick={() => curtida(props.id)} class="curtido desativa" src={curtido} />
            <ion-icon class="curtir" name="chatbubble-outline"></ion-icon>
            <ion-icon class="curtir" name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon class="curtir" name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtido_por_img} />
          <div class="texto">
            Curtido por <strong>{props.curtido_por_txt}</strong> e <strong>outras {props.qtdCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>

  )
}
function Post() {

  let envio = [{ id: "id0", tittle: "UFPR", img_usuario: "https://www.grancursosonline.com.br/upload/projeto/ufpr-universidade-federal-do-parana.png", img_post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRHssa7Xl1BAG9w8xB8IAqzgaH1-_Lz2skw&usqp=CAU", curtido_por_img: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-1/49343277_910724899098138_4224736579186327552_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=eQgoe6QM5bIAX_qDBaU&_nc_ht=scontent-gru2-2.xx&oh=00_AT_4deRRGjhTXXssqJ1SSOCQw4IamslTAHCAsWiTGaR0KQ&oe=62FA8DF4", curtido_por_txt: "responde ai", qtdCurtidas: "590.000" }, { id: "id1", tittle: "SC Corinthians Paulista", img_usuario: "https://i.pinimg.com/originals/97/8b/6d/978b6d6df85c86c1044d23c107a481d6.jpg", img_post: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMapFwkNQUo1GfNK4bMGF4YLUdEDWiDbJEDQ&usqp=CAU", curtido_por_img: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-1/49343277_910724899098138_4224736579186327552_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=eQgoe6QM5bIAX_qDBaU&_nc_ht=scontent-gru2-2.xx&oh=00_AT_4deRRGjhTXXssqJ1SSOCQw4IamslTAHCAsWiTGaR0KQ&oe=62FA8DF4", curtido_por_txt: "responde ai", qtdCurtidas: "195.999" }, { id: "id02", tittle: "Barbara Lopes", img_usuario: "https://scontent-gru1-1.xx.fbcdn.net/v/t39.30808-6/245771311_10158372881182960_7049780768301723649_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFmWTKgMOmJRqyNq9JWMmsS6nARsEwdicfqcBGwTB2Jx4HNSVDW5tRnfqcDS8F9euYA7UDJPXEEt0TFlyC7k3bA&_nc_ohc=5UOexGApuYUAX9I1kQK&_nc_ht=scontent-gru1-1.xx&oh=00_AT_KTdHjtwuP41Q--cRT_UoCzIY2mYVYtLpI-gZ8dIHkhQ&oe=62DB2B2A", img_post: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.15752-9/292502037_567157235007329_3000855877064871737_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFnB5kyKfcSUFx4Yv5AHyYcugtTmBaJXSC6C1OYFoldIAZEhF8tEsuwab49V1XpUcDLnTdPAd3DPIgGgcsNK6j1&_nc_ohc=OkkQyIWXJWkAX-VuMTo&_nc_ht=scontent-gru2-2.xx&oh=03_AVKwfrDur2mDhgUnFTamgNCmENUnjcGGvXPQVbkh1jD8eA&oe=62FC633F", curtido_por_img: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-1/49343277_910724899098138_4224736579186327552_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=eQgoe6QM5bIAX_qDBaU&_nc_ht=scontent-gru2-2.xx&oh=00_AT_4deRRGjhTXXssqJ1SSOCQw4IamslTAHCAsWiTGaR0KQ&oe=62FA8DF4", curtido_por_txt: "responde ai", qtdCurtidas: "890.000" }]
  let postar = envio.map(Ref => <Add_post id={Ref.id} tittle={Ref.tittle} img_usuario={Ref.img_usuario} img_post={Ref.img_post} curtido_por_img={Ref.curtido_por_img} curtido_por_txt={Ref.curtido_por_txt} qtdCurtidas={Ref.qtdCurtidas} />)
  return (
    <div class="post">
      {postar}
    </div>
  )
}

export default Post;