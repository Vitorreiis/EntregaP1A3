import "../addGamesPage/addGamesPage.css";
import Header from "../components/header";
import imageDemonsouls from "../../assets/Demonsouls.jpg";

function AddGamesPage() {
  return (
    <>
      <Header />
      <section className="body-page">
        <div className="container-add">
          <h1 className="titulo-add">Cadastro de jogos</h1>
          <button className="button-add">Cadastrar jogo</button>
        </div>
        <h1 className="sub-titulo-add">Jogos Cadastrados</h1>
        <div className="games-registered">
          <div className="card-games">
            <img className="img-card" src={imageDemonsouls} alt="" />
            <div className="details-game">
              <h1 className="texto-details">Demon Souls</h1>
              <h1 className="texto-details">categorias</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddGamesPage;
