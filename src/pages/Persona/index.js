import React, { Component } from 'react';
import "./styles.css";
import { Link } from "react-router-dom";
// import api from "../../service/api";
import FirstForm from "../../components/FirstForm";
import SecondForm from "../../components/SecondForm";


class Persona extends Component {

  state = {
    nome: "",
    cargo: "",
    email: "",
    loading: false,
    renderForm: 1
  }

  handleChange = ({target}) => {

    this.setState({[target.name]: target.value});
  
  }

  renderForms() {
    const { renderForm } = this.state;

    if(renderForm === 1) {
      return (<FirstForm handleChange={this.handleChange}></FirstForm>);
    } else {
      return (<SecondForm handleChange={this.handleChange}></SecondForm>);
    }
  }

  changeForm(n) {
    const { renderForm } = this.state;
    this.setState({renderForm: renderForm + n});
  }


  render() {
    return (
      <div className="myContainer">
        <h2 className="header">Gerador de Personas</h2>
        <h4 className="myControl">Criando minha persona!</h4>
        
        {this.renderForms()}
 
        <footer className="mySpacingContainer">
          <button onClick={() => {this.changeForm(-1)}} className="btn btn-primary btn-lg">Voltar</button>
          <button onClick={() => {this.changeForm(1)}} className="btn btn-primary btn-lg">Avançar</button>
        </footer>
  
      </div>
    );
  }
}

export default Persona;
