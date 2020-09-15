
import React, { Component } from 'react';




class SecondForm extends Component {

      render() {
        return (
          <form className="myForm">
            <div className="form-group">
              <label htmlFor="nome">Onde sua persona trabalha:</label>
              <input 
                name="where_works" 
                onChange={this.props.handleChange} 
                type="text" 
                className="form-control" 
                id="trabalho" 
                aria-describedby="emailHelp" 
                placeholder="Digite o local de trabalho"></input>
            </div>
      

            <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Nivel de escolaridade da persona:</label>
            <select name="scolarship" onChange={this.props.handleChange} className="form-control" id="scolarship">
              <option></option>
              <option>Ensino Médio</option>
              <option>Ensino técnico</option>
              <option>Ensino técnico</option>
              <option>Ensino superior</option>
              <option>Mestrado</option>
              <option>Doutorado</option>
            </select>
            </div>

            <div className="form-group">
              <label htmlFor="communication">Quais os meios de comunicação usados pela Persona:</label>
              <input name="communication_means" onChange={this.props.handleChange} type="text" className="form-control" id="communication" aria-describedby="emailHelp"></input>
            </div>

           
          </form>
        )
      }    
    
}

export default SecondForm;