import "./App.css";
import './mainnav.css';
import linkedin from "./components/img/linkedin.svg";
import github from "./components/img/github.svg";


export function Contatos() {
    return (
        <div>
            <div className="container">
                <ul id="sublinhado">
                    <li><a href='/login'>LOGIN</a></li>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/cadastro">CADASTRAR</a></li>
                    <li><a href='/contatos'>CONTATOS</a></li>
                </ul>
            </div>
            <div id="contato">
                <ul>
                    <figure><img src={linkedin} width="80px" alt="#" /></figure>
                    <figure><img src={github} width="80px" alt="#" /></figure>
                </ul>

            </div>
        </div>
    );
};
export default Contatos;