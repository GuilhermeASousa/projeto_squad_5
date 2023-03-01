import './login.css';




export function Login() {
    return (
        <div>
            <div class="blankLayoutWrapper">
                <div class="loginPage">
                    <a href="/"><img class="logoImg" src="download.png" alt="Logo da Resilia"/></a>
                    <div class="loginFormContainer">
                        <h2>Login com Resilia</h2>
                        <p>Preencha seus dados para entrar</p>
                        <div class="formInputContainer darkMode">
                            <input type="text" name="E-mail" required="" />
                            <label for="E-mail">E-mail ou CPF</label>
                        </div>
                        <div class="formInputContainer darkMode">
                            <input type="password" name="password" required=""  />
                            <label for="password">Senha</label>
                        </div>

                        <a href="/cadastro"><button  class="defaultBtn">Entrar </button> </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login