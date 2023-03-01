import './App.css';
import './mainnav.css';

export function Mainnav(){
    return(
    <div className="container">
        <ul id="sublinhado">
            <li><a href='/login'>LOGIN</a></li>
            <li><a href="/">HOME</a></li>
            <li><a href="/cadastro">CADASTRAR</a></li>
            <li><a href='/contatos'>CONTATOS</a></li>
        </ul>
    </div>
    );
};
