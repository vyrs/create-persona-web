
import React, { Component } from 'react';




class FirstForm extends Component {

      render() {
        return (
          <form className="myForm">
            <div className="form-group">
              <label htmlFor="nome">Qual o nome da sua persona?</label>
              <input name="name" onChange={this.props.handleChange} type="text" className="form-control" id="nome" aria-describedby="emailHelp" placeholder="Digite o nome"></input>
            </div>

            <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Sexo:</label>
            <select name="sex" onChange={this.props.handleChange} className="form-control" id="sexo">
              <option></option>
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
            </div>

            <div className="form-group">
              <label htmlFor="idade">Idade:</label>
              <input name="age" onChange={this.props.handleChange} type="number" className="form-control" id="idade" aria-describedby="emailHelp" placeholder="Digite a idade"></input>
            </div>

            <div className="form-group">
              <label htmlFor="cargo">Cargo/Ocupação - o que sua persona faz:</label>
              <input name="role" onChange={this.props.handleChange} type="text" className="form-control" id="cargo" placeholder="Cargo"></input>
            </div>
          </form>
        )
      }    
    
}

export default FirstForm;