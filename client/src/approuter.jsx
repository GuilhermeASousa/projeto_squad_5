import {Routes} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom"
import Cadastro from "./home";
import { Route } from "react-router-dom";
import Home1 from "./home1";
import './App.css';
import {Contatos} from "./contatos";
import {Login} from "./login"




export function Approuter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<Home1/>} />
                <Route path="/cadastro" element ={<Cadastro/>}/>
                <Route path="/contatos" element ={<Contatos/>}/>
                <Route path="/login" element = {<Login/>}/>
            </Routes>
        </Router>
    );
};
