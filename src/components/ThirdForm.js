import React, { Component } from 'react';


class ThirdForm extends Component {

      render() {
        return (
          <form className="myForm">

            <div className="form-group">
              <label htmlFor="textarea1">Quais os principais objetivos desta persona?</label>
              <textarea name="dreams" className="form-control" id="textarea1" cols="30" rows="3" onChange={this.props.handleChange}></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="textarea2">Quais os principais problemas/desafios desta persona?</label>
              <textarea name="problems" className="form-control" id="textarea2" cols="30" rows="3" onChange={this.props.handleChange}></textarea>
            </div>
      

         

        

           
          </form>
        )
      }    
    
}

export default ThirdForm;