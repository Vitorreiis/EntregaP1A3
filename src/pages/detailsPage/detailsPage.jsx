import "../detailsPage/detailsPage.css";
import Header from "../components/header";
import imageDemonsouls from "../../assets/Demonsouls.jpg";

function DetailsPage() {
  return (
    <>
      <body className="body-details">
        <Header />
        <section class="conteudo">
          <h1>darksouls Souls</h1>
          <img src={imageDemonsouls} alt="" />

          <p>
            Bluepoint Games traz o remake de um clássico, Demon's Souls.
            Completamente recriado e magistralmente aprimorado, este remake
            apresenta os horrores de uma terra fantástica sombria e coberta pela
            névoa a uma nova geração de gamers. Quem já enfrentou suas provações
            e tormentos poderá novamente desafiar a escuridão com qualidade
            visual impressionante e desempenho incrível
          </p>
          <ul class="avaliacao">
            Dê uma nota ao jogo:
            <li class="star-icon ativo" data-avaliacao="1"></li>
            <li class="star-icon" data-avaliacao="2"></li>
            <li class="star-icon" data-avaliacao="3"></li>
            <li class="star-icon" data-avaliacao="4"></li>
            <li class="star-icon" data-avaliacao="5"></li>
          </ul>
        </section>
      </body>
    </>
  );
}

export default DetailsPage;
