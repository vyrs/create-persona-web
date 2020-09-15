import React, { Component } from 'react';
import "./styles.css";
// import { Link } from "react-router-dom";
import api from "../../service/api";
import FirstForm from "../../components/FirstForm";
import SecondForm from "../../components/SecondForm";
import ThirdForm from "../../components/ThirdForm";
import FourthForm from "../../components/FourthForm";
import PersonasList from "../../components/PersonasList";



class Persona extends Component {

  state = {
    owner:"",
    name: "",
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

  componentDidMount() { // executa quando o componente é iniciado
    console.log("Componente montado");
    this.setState({owner :this.props.match.params.ownerId})
    console.log(this.props.match.params.ownerId);
    
  }

  savePersona = async() => {
    const { owner,
    name,
    sex,
    age,
    role,
    where_works,
    scolarship,
    communication_means,
    dreams,
    problems,
    company_help,
    company_workers,
    company_role,
    image, } = this.state;
    
    try {
      const response = await api.post("/persona", { owner,
        name,
        sex,
        age,
        role,
        where_works,
        scolarship,
        communication_means,
        dreams,
        problems,
        company_help,
        company_workers,
        company_role,
        image, });
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  renderForms() {
    const { renderForm } = this.state;

    if(renderForm === 1) {
      return (<FirstForm handleChange={this.handleChange}></FirstForm>);
    } else if(renderForm === 2) {
      return (<SecondForm handleChange={this.handleChange}></SecondForm>);
    } else if(renderForm === 3) {
      return (<ThirdForm handleChange={this.handleChange}></ThirdForm>);
    } else if(renderForm === 4) {
      return (<FourthForm handleChange={this.handleChange}></FourthForm>);
    } else {
      return (<PersonasList image={this.state.image} selectImage={this.selectImage}></PersonasList>);
    }
  }

  changeForm(n) {
    const { renderForm } = this.state;

    if(renderForm === 1 && n === -1) {
      return;
    } else if(renderForm === 5 && n === 1) {
      this.savePersona();
    } else {
      this.setState({renderForm: renderForm + n});
    }

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

      
 
        <footer className="mySpacingContainer">
          <button onClick={() => {this.changeForm(-1)}} className="btn btn-primary btn-lg">Voltar</button>
          <button 
          onClick={() => {
            this.changeForm(1);
            }} 
            className="btn btn-primary btn-lg">
              {this.state.renderForm === 5 ? "Salvar" : "Avançar"} </button>
        </footer>
  
      </div>
    );
  }
}

export default Persona;
