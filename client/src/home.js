import React, { useEffect, useState } from "react";
import './App.css';
import Axios from "axios";
import Card from "./components/cards/cards";


function LimparForm() {
  document.getElementById("name").value = "";
  document.getElementById("developers").value = "";
  document.getElementById("description").value = "";
  document.getElementById("repository").value = "";
  document.getElementById("view").value = "";
}

function Cadastro() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);
  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      developers: values.developers,
      description: values.description,
      category: values.category,
      repository: values.repository,
      view: values.view,
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        developers: values.developers,
        description: values.description,
        category: values.category,
        repository: values.repository,
        view: values.view,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            name: values.name,
            developers: values.developers,
            description: values.description,
            category: values.category,
            repository: values.repository,
            view: values.view,
          },
        ]);
      });
    });
    LimparForm();
    window.location.href='http://localhost:3000/'
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };



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

    <div className="app-container">
      <div className="register-container">
        <h1 className="register-tittle">VitrineDev</h1>
        <div className="column">
          <div className="column1">
            <input type="text" name="name" id="name" placeholder="Nome do Projeto" className="register-input" onChange={handleaddValues} />

            <select name="category" id="category" onChange={handleaddValues}>
              <option selected disabled>Categoria</option>
              <option >Web</option>
              <option >Mobile</option>
            </select>
            <input type="text" name="developers" id="developers" placeholder="Desenvolvedores" className="register-input" onChange={handleaddValues} />
          </div>
          <div className="column2">
            <input type="text" name="description" id="description" placeholder="Descrição" className="register-input" onChange={handleaddValues} />

            <input type="text" name="repository" id="repository" placeholder="Link do Repositório" className="register-input" onChange={handleaddValues} />

            <input type="text" name="view" id="view" placeholder="Link de Visualização" className="register-input" onChange={handleaddValues} />
          </div>
        </div>
        <button onClick={handleRegisterGame} className="register-button">Cadastrar</button>
      </div>

      
    </div>
    </div>
  );
}

export default Cadastro;
