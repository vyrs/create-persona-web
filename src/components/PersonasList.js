import React, { Component } from 'react';

const linksPersonas = [ {link: "https://rockpersonas.herokuapp.com/assets/personas/1-e0e7223aeb2f66a659d032fb393d11d7e62e00706b1bef5f9f1a13eaa93d4b4b.png"}, 
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/2-03cad6d57866b41e354c240f94fbe4a930d54ffe73e5e864ce28822c9d170c1e.png"},
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/3-3510b28044943dcf7b3142b921b43b82ff629b23c9282e90356343d0b58446e6.png"},
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/4-9b6a9ad4c6490b8b805a8f69f4aba31a57db78e09a7801282072d5710aa60f7b.png"},
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/5-25131388b297ca9b76122026fc1276249c9f0e3330858b7778195b26c33d2274.png"},
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/6-0588b1d6f7b537b1b9fa77d7910818e8696b953a269f6b88ce346af07f9458fa.png"},
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/7-25d41629f54a8a1f6c3f35d9260a748becd39d725fad1983b87cd0e984514972.png"},
                        {link: "https://rockpersonas.herokuapp.com/assets/personas/8-7609c9e9eba66451226d7f290c37254bd15a8b5e3ed2b54b7721eac3ac5e4e26.png"},
                      ]

class PersonasList extends Component {

      render() {
        return (
          <div className="imagesBox">
            {linksPersonas.map(persona => {
              const isSelected = persona.link === this.props.image? true : false; // this.props.image acessa é estado da imagem na index, isso é possível pq passamos o image={this.state.image} na redenrização dessa pg na index
              return (
                <div className={isSelected? "imgBackgroundBlue" : "imgBackground"} key={persona.link} onClick={() => this.props.selectImage(persona.link)}>
                  <img 
                  className="imagePersona"
                  src={persona.link} 
                  alt="foto de persona"/>
                </div>
              )
            })}
        </div>
        );
      }    
    
}

export default PersonasList;