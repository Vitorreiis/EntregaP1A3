import "../registerPage/registerPage.css";

function RegisterPage() {
  return (
    <>
      <body className="body-register">
        <form>
          <h2>Cadastro</h2>
          <div>
            <label>Nome Completo</label>
          </div>
          <input type="text" name="nomecompleto" id="nomereg" />
          <div>
            <label>Usuario</label>
          </div>
          <input type="text" name="usuario" id="user" />
          <div>
            <label>Email</label>
          </div>
          <input type="email" name="email.register" id="emailreg" />
          <div>
            <label>Senha</label>
          </div>
          <input type="password" name="senha.register" id="senhareg" />
          <div>
            <button
              type="button"
              class="cadastrar"
              id="botao-cadastro"
              onclick="cadastrar()"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </body>
    </>
  );
}

export default RegisterPage;
