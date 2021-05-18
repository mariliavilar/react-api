import React, { Component } from 'react';
import api from './api';

class App extends Component {
  state = {
    locatarios: [],
  };

  //usar componentDidMount para buscar os dados na api
  //ele é  chamado imediatamente apos alguma atualizacao ocorrer
  async componentDidMount() {
    //const response = await api.get('/star%20wars'); //oq mais eu quiser add a url
    const response = await api.get('');

    console.log(response.data);

    //setar os valores que receber
    this.setState({ locatarios: response.data });
  }

  render() {
    //buscar os dados que estao no state [apenas filmes]
    const { locatarios } = this.state;

    return (
      <div>
        <h1>Listar Locatarios</h1>

        {console.log(locatarios)}
        {locatarios.map((locatario) => (
          <ul key={locatario.cnpj}>
            <h2>
              <strong>Empresa: </strong>
              {locatario.nomeFantasia}
            </h2>
            <p>Responsável: {locatario.nomeResponsavel}</p>
          </ul>
        ))}

        {/* vou percorrer o array filmes, utilizando o map. e ao percorrer cada filme, sera atribuido na posicao filme */}
      </div>
    );
  }
}

export default App;
