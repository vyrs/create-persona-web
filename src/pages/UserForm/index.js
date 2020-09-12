import React, { Component } from 'react';
import "./styles.css";
import { Link } from "react-router-dom";


class UserForm extends Component {
  render() {
    return (
      <div className="myContainer">
        <h2 className="header">Gerador de Personas</h2>
        <h4 className="myControl">Queremos saber quem é você!</h4>
  
        <form className="myForm">
          <div class="form-group">
            <label for="nome">Qual o seu nome?</label>
            <input type="text" class="form-control" id="nome" aria-describedby="emailHelp" placeholder="Digite seu nome"></input>
          </div>
          <div class="form-group">
            <label for="email">Qual o seu email?</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com"></input>
          </div>
          
  
          <div class="form-group">
          <label for="exampleFormControlSelect2">Qual é o seu cargo?</label>
          <select class="form-control" id="exampleFormControlSelect2">
            <option>CEO</option>
            <option>Diretor</option>
            <option>Estudante</option>
            <option>Outros</option>
          </select>
          </div>
        </form>
        <footer className="mySpacingContainer">
          <Link to="/" class="btn btn-primary btn-lg">Voltar</Link>
          <button type="submit" class="btn btn-primary btn-lg">Submit</button>
        </footer>
  
      </div>
    );
  }
}

export default UserForm;
