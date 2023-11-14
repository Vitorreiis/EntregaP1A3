import "../homePage/homePage.css";
import Header from "../components/header";
import imageDemonsouls from "../../assets/Demonsouls.jpg";
import imageDarksouls from "../../assets/darksouls.jpg";
import imageDarksouls2 from "../../assets/darksouls2.webp";
import imageDemonsouls3 from "../../assets/darksouls3.webp";
import imageBloodborne from "../../assets/bloodborne.jpg";
import imageSekiro from "../../assets/sekiro.webp";
import imageEldenring from "../../assets/eldenring.webp";
import imageNioh from "../../assets/nioh.jpg";
import imageNioh2 from "../../assets/nioh2.png";
import imageArmoredcore from "../../assets/armoredcore.jpg";
import imageLiesofpi from "../../assets/liesofpi.png";
import imageNekopara from "../../assets/nekopara.jpg";
import imageLordsofthefallen from "../../assets/lordsofthefallen.webp";
import imageNekopara1 from "../../assets/nekopara1.jpg";
import imageNekopara2 from "../../assets/nekopara2.webp";
import imageNekopara3 from "../../assets/nekopara3.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Header />
      <div className="body">
        <main>
          <ul className="games">
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageDemonsouls} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageDarksouls} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageDarksouls2} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageDemonsouls3} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageBloodborne} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageSekiro} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageEldenring} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageNioh} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageNioh2} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageArmoredcore} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageLiesofpi} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageLordsofthefallen} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageNekopara} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageNekopara1} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageNekopara2} alt="Jogo" />
              </Link>
            </li>
            <li>
              <Link to="/detailsPage">
                User
                <img src={imageNekopara3} alt="Jogo" />
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}

export default HomePage;
