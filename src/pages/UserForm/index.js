import React, { Component } from 'react';
import "./styles.css";
import { Link } from "react-router-dom";
import api from "../../service/api";


class UserForm extends Component {

  state = {
    nome: "",
    cargo: "",
    email: "",
    loading: false
  }

  handleChange = ({target}) => {

    this.setState({[target.name]: target.value});
  
  }

  saveUser = async() => {
    const { nome, cargo, email } = this.state;
    this.setState({loading:true});
    try {
      const response = await api.post("/user", {nome, cargo,email});
      console.log(response.data);
      this.setState({loading:false});

      return this.props.history.push(`/persona/${response.data.user._id}`); // esse history vem quando usamos as rotas no routes.js

    } catch (error) {
      if(error.status === 401) {
        if(error.data.user) { // se o erro possui as informações do usuario ou seja se encontrar um usario que já tem aquele email
          return this.props.history.push(`/persona/${error.data.user._id}`); // depois manda para a pagina de criar personas com o id do usuario que já existe
        }
      }
      this.setState({loading:false});
    }
  }

  render() {
    return (
      <div className="myContainer">
        <h2 className="header">Gerador de Personas</h2>
        <h4 className="myControl">Queremos saber quem é você!</h4>
  
        <form className="myForm">
          <div className="form-group">
            <label htmlFor="nome">Qual o seu nome?</label>
            <input name="nome" onChange={this.handleChange} type="text" className="form-control" id="nome" aria-describedby="emailHelp" placeholder="Digite seu nome"></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Qual o seu email?</label>
            <input name="email" onChange={this.handleChange} type="email" className="form-control" id="email" placeholder="name@example.com"></input>
          </div>
          
  
          <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Qual é o seu cargo?</label>
          <select name="cargo" onChange={this.handleChange} className="form-control" id="exampleFormControlSelect2">
            <option></option>
            <option>CEO</option>
            <option>Diretor</option>
            <option>Estudante</option>
            <option>Outros</option>
          </select>
          </div>
        </form>
        <footer className="mySpacingContainer">
          <Link to="/" className="btn btn-primary btn-lg">Voltar</Link>
          {/* <Link to="/persona" className="btn btn-primary btn-lg" onClick={this.saveUser}> {this.state.loading ? ( <div class="spinner-border" role="status"></div> ) : "Avançar" }</Link> */}

          <button type="submit" className="btn btn-primary btn-lg" onClick={this.saveUser}> 
            {this.state.loading ? ( <div className="spinner-border" role="status"></div> ) : "Avançar" }</button>

        </footer>
  
      </div>
    );
  }
}

export default UserForm;
