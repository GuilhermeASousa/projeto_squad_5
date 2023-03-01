import "./mainnav.css"
import img4 from "./components/img/img4.jpg"


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
      <div id='titulo'>
        <h1>VitrineDev</h1>
      </div>

      <div className="card-grid">
        {listCard.map((val) => (
          <Card
            listCard={listCard}
            setListCard={setListCard}
            key={val.id}
            id={val.id}
            name={val.name}
            developers={val.developers}
            description={val.description}
            category={val.category}
            repository={val.repository}
            view={val.view}
          />
        ))}
      </div>

    </div>
    </div>
  );
}

export default Cadastro;
