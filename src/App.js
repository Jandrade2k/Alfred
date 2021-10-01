import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Bandeija } from './components';
import api from './api'

const App = () => {
  const [itens, setItens] = useState([]);
  const [bandeija, setBandeija] = useState({});

  async function buscaProdutoID(id) {
    const response = await api.get(`/items/${id}`)

    return response.data;
  }

  async function listarProdutos() {
    const response = await api.get('/items')

    setItens(response.data);
    return response.data;
  }

  async function listarBandeija() {
    const response = await api.get('/cart')

    this.setBandeija(response.data);
  }

  async function addBandeija(id, quantidade) {

    var item = await buscaProdutoID(id);

    item.quantity = quantidade;

    const response = await api.post(`/cart/${id}`, item)


    this.setBandeija(response.data);
  }

  async function alteraQtdBandeija(id, quantidade) {

    var item = await buscaProdutoID(id);

    item.quantity = quantidade;

    const response = await api.put(`/cart/${id}`,)

    this.setBandeija(response.data);
  }

  async function limparItemBandeija(id) {
    const response = await api.delete(`/cart/${id}`)

    this.setBandeija(response.data);
  }

  async function limparBandeija() {

    const item = await listarBandeija();

    item.map(e => {
      const response = api.delete(`/cart/${e.id}`);
      return this.setBandeija(response.data);
    })
  }

  useEffect(() => {
    listarProdutos();
    // listarBandeija();
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar totalItems={bandeija.length} handleDrawerToggle={true} />
        <Switch>
          <Route exact path="/">
            {console.log('funcionou(app.js)', itens)}
            <Products produtos={itens} addBandeija={addBandeija} alteraQtdBandeija />
          </Route>
          <Route exact path="/cart">
            <Bandeija cart={bandeija} onUpdateCartQty={alteraQtdBandeija} onRemoveFromCart={limparItemBandeija} onEmptyCart={limparBandeija} />
          </Route>
          <Route path="/checkout" exact>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
