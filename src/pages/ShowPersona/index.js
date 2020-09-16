import React, { Component } from 'react';
import "./styles.css";
// import { Link } from "react-router-dom";
import api from "../../service/api";




class ShowPersona extends Component {

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

  async componentDidMount() { // executa quando o componente é iniciado
    console.log("Componente montado");
    
    console.log(this.props.match.params.personaId);
    
    try {
      const response = await api.get(`/persona/${this.props.match.params.personaId}`);
      const persona = response.data.personas[0];
      const {name,age,sex,scolarship,communication_means,dreams,problems,company_help,image, where_works,role} = persona;
      this.setState({name,age,sex,scolarship,communication_means,dreams,problems,company_help,image, where_works,role}); // para todos fiicarem acessiveis no this.state
    } catch (error) {
      console.log(error);
    }
  }

 
  render() {
    const {name,age,sex,scolarship,communication_means,dreams,problems,company_help,image,where_works,role} = this.state; // se não fizesse isso poderia usar tbm ex:this.state.nome, assim fica mais organizado
    return (
      <div className="myContainer">
        <h2 className="header">Essa é Sua Persona</h2>
        <img 
                  className="myPersona"
                  src={image} 
                  alt="foto de persona"/>
        <h2 className="myName">{name}</h2>
        <h3 className="myRole">{role}</h3>
        <p className="h3 font-weight-normal"> <strong>Empresa:</strong> {where_works} </p>
        <p className="h3 font-weight-normal"> <strong>Idade:</strong> {age} </p>
        <p className="h3 font-weight-normal"> <strong>Genêro:</strong> {sex} </p>
        <p className="h3 font-weight-normal"> <strong>Educação:</strong> {scolarship} </p>
        <p className="h3 font-weight-normal"> <strong>Mídias:</strong> {communication_means} </p>
        <p className="h3 font-weight-normal"> <strong>Objetivos:</strong> {dreams} </p>
        <p className="h3 font-weight-normal"> <strong>Desafios:</strong> {problems} </p>
        <p className="h3 font-weight-normal"> <strong>Como minha empresa pode ajudá-la:</strong> {company_help} </p>

      
 
       
  
      </div>
    );
  }
}

export default ShowPersona;
