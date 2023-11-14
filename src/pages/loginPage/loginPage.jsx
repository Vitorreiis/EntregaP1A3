import "../loginPage/loginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="body-login">
        <div className="textfield">
          <h1 className="title">Olá,Seja Bem-Vindo a Phantom</h1>

          <h3 className="boasvindas">
            É um prazer ter-lo conosco
            <br /> efetue seu login e comece sua jornada.
          </h3>
        </div>

        <form>
          <div>
            <label>Usuario</label>
          </div>
          <input type="email" name="usuario" id="user" />

          <div>
            <label>Senha</label>
          </div>
          <input type="password" name="senha" id="password" />

          <div>
            <Link to="/homePage" className="button-form">
              Entrar
            </Link>
          </div>

          <div>
            <Link to="/registerPage" className="button-form">
              Registrar
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
