import React, { Component } from 'react';


class FourthForm extends Component {

      render() {
        return (
          <form className="myForm">

            <div className="form-group">
              <label htmlFor="textarea1">Como minha empresa pode ajudar esta persona?</label>
              <textarea name="company_help" className="form-control" id="textarea1" rows="3" onChange={this.props.handleChange}></textarea>
            </div>

            <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Qual é o número de funcionários da sua empresa?</label>
            <select name="company_workers" onChange={this.props.handleChange} className="form-control" id="scolarship">
              <option></option>
              <option>1</option>
              <option>2-3</option>
              <option>4-10</option>
              <option>11-50</option>
              <option>Mais de 50</option>
            </select>
            </div>

            <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Qual é a área de atuação da sua empresa?</label>
            <select name="company_role" onChange={this.props.handleChange} className="form-control" id="scolarship">
              <option></option>
              <option>Software</option>
              <option>Imobiliário</option>
              <option>Turismo e Lazer</option>
              <option>Telecomunicações</option>
            </select>
            </div>
      

         

        

           
          </form>
        )
      }    
    
}

export default FourthForm;