import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import product_card from '../../data/product_data';

import './styles.css';

var actualState = 0;
export default class Vote extends Component {
  constructor(props) {
      super(props)
      this.state = {id: props.match.params.id};
      console.log(this.state.id)
      actualState = this.state.id;
      console.log(this.props.match.params.id)
      // return actualState
  }

  render() {
    return (
      <div className="product">
        <div className="apresentacao">
          <h4>Então você escolheu uma cerveja, está interessado né?</h4>
        </div>
        <div className="button">
          <div className="product-name">
            {product_card.filter(item => item.id == actualState).map(filteredItem => (
              <h1>{filteredItem.product_name}</h1>
            ))}
          </div>
        </div>
        <div className="text">
          <h4>Aqui fica todas as especificações, as mesmas  da sua própria criação + o </h4>
          <h4>texto e o vídeo que o user fez Quanto arrecadou: R$ Y % de bater a meta</h4>
        </div>
        <div className="product-image">
        {product_card.filter(item => item.id == actualState).map(filteredItem => (
          <img src={filteredItem.thumb} alt='thumbnail do item'/>
        ))}
        </div>
        <div className="product-description">
          {product_card.filter(item => item.id == actualState).map(filteredItem => (
            <h3>{filteredItem.description}</h3>
          ))}
        </div>
        <div className="button-b">
          <div className="product-name">
            <h1>Eu quero essa cerveja</h1>
          </div>
        </div>
        <div className="button-b">
          <div className="product-name">
            <h1>Ver opções semelhantes</h1>
          </div>
        </div>
        <div className="button-b">
          <div className="product-name">
            <h1>Compartilhar nas redes sociais</h1>
          </div>
        </div>
        <div className="button-c">
          <div className="product-name">
            <h1>Não tem na sua região? Clique aqui e crie a sua!</h1>
          </div>
        </div>
        <div className="nada">
            <p>.</p>
        </div>
      </div>
    );
  }
}

// function Vote() {
  

//   // return (
//   //   <div>
//   //     {product_card.filter(item => item.id <= actualState).map(filteredItem => (
//   //       console.log(filteredItem.product_name)
//   //     ))}
//   //   </div>
//   // );
// }

{/* export default Vote; */}