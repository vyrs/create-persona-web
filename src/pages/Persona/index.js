import React, { Component } from 'react';
import "./styles.css";
// import { Link } from "react-router-dom";
// import api from "../../service/api";
import FirstForm from "../../components/FirstForm";
import SecondForm from "../../components/SecondForm";
import ThirdForm from "../../components/ThirdForm";
import FourthForm from "../../components/FourthForm";
import PersonasList from "../../components/PersonasList";



class Persona extends Component {

  state = {
    nome: "",
    sex: "",
    age: "",
    role: "",
    where_works: "",
    scolarship: "",
    communication_means: "",
    dreams: "",
    problems: "",
    company_help: "",
    company_workers: "",
    company_role: "",
    image: "",
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
    } else if(renderForm === 2) {
      return (<SecondForm handleChange={this.handleChange}></SecondForm>);
    } else if(renderForm === 3) {
      return (<ThirdForm handleChange={this.handleChange}></ThirdForm>);
    } else {
      return (<FourthForm handleChange={this.handleChange}></FourthForm>);
    }
  }

  changeForm(n) {
    const { renderForm } = this.state;
    this.setState({renderForm: renderForm + n});
  }

  selectImage = (image) => {
    this.setState({image})
  }


  render() {
    return (
      <div className="myContainer">
        <h2 className="header">Gerador de Personas</h2>
        <h4 className="myControl">Criando minha persona!!</h4>
        
        {this.renderForms()}

        <PersonasList image={this.state.image} selectImage={this.selectImage}></PersonasList>

      
 
        <footer className="mySpacingContainer">
          <button onClick={() => {this.changeForm(-1)}} className="btn btn-primary btn-lg">Voltar</button>
          <button onClick={() => {this.changeForm(1)}} className="btn btn-primary btn-lg">Avançar</button>
        </footer>
  
      </div>
    );
  }
}

export default Persona;
